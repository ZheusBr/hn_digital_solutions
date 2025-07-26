-- HN TI & SOLUÇÕES - Authentication and Content Management System Migration
-- Created: 2025-07-26T06:05:03.945Z
-- Description: Complete authentication system with content management for HN TI & SOLUÇÕES website

-- 1. Create custom types
CREATE TYPE public.user_role AS ENUM ('admin', 'editor');
CREATE TYPE public.project_status AS ENUM ('planning', 'in_progress', 'completed', 'on_hold');
CREATE TYPE public.service_type AS ENUM ('website', 'ecommerce', 'consultation', 'maintenance');

-- 2. Create user profiles table (intermediary between auth.users and app)
CREATE TABLE public.user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    role public.user_role DEFAULT 'editor'::public.user_role,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 3. Create projects table for portfolio management
CREATE TABLE public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    project_url TEXT,
    technologies JSONB DEFAULT '[]'::jsonb,
    service_type public.service_type NOT NULL,
    status public.project_status DEFAULT 'completed'::public.project_status,
    created_by UUID REFERENCES public.user_profiles(id) ON DELETE SET NULL,
    featured BOOLEAN DEFAULT false,
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 4. Create services table for service offerings management
CREATE TABLE public.services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    short_description TEXT,
    icon TEXT,
    price_range TEXT,
    features JSONB DEFAULT '[]'::jsonb,
    active BOOLEAN DEFAULT true,
    created_by UUID REFERENCES public.user_profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 5. Create testimonials table
CREATE TABLE public.testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_name TEXT NOT NULL,
    client_position TEXT,
    client_company TEXT,
    content TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    project_id UUID REFERENCES public.projects(id) ON DELETE SET NULL,
    featured BOOLEAN DEFAULT false,
    active BOOLEAN DEFAULT true,
    created_by UUID REFERENCES public.user_profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 6. Create indexes for performance
CREATE INDEX idx_user_profiles_email ON public.user_profiles(email);
CREATE INDEX idx_user_profiles_role ON public.user_profiles(role);
CREATE INDEX idx_projects_status ON public.projects(status);
CREATE INDEX idx_projects_featured ON public.projects(featured);
CREATE INDEX idx_projects_service_type ON public.projects(service_type);
CREATE INDEX idx_projects_created_by ON public.projects(created_by);
CREATE INDEX idx_services_active ON public.services(active);
CREATE INDEX idx_testimonials_featured ON public.testimonials(featured);
CREATE INDEX idx_testimonials_active ON public.testimonials(active);

-- 7. Enable RLS
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- 8. Create helper functions for RLS policies
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
SELECT EXISTS (
    SELECT 1 FROM public.user_profiles up
    WHERE up.id = auth.uid() AND up.role = 'admin'::public.user_role
)
$$;

CREATE OR REPLACE FUNCTION public.is_authenticated_user()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
SELECT auth.uid() IS NOT NULL
$$;

-- 9. Create RLS policies
-- User profiles policies
CREATE POLICY "users_own_profile"
ON public.user_profiles
FOR ALL
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Projects policies - public read, authenticated write
CREATE POLICY "public_read_projects"
ON public.projects
FOR SELECT
TO public
USING (true);

CREATE POLICY "authenticated_manage_projects"
ON public.projects
FOR ALL
TO authenticated
USING (public.is_authenticated_user())
WITH CHECK (public.is_authenticated_user());

-- Services policies - public read, authenticated write
CREATE POLICY "public_read_services"
ON public.services
FOR SELECT
TO public
USING (active = true);

CREATE POLICY "authenticated_manage_services"
ON public.services
FOR ALL
TO authenticated
USING (public.is_authenticated_user())
WITH CHECK (public.is_authenticated_user());

-- Testimonials policies - public read active ones, authenticated write
CREATE POLICY "public_read_testimonials"
ON public.testimonials
FOR SELECT
TO public
USING (active = true);

CREATE POLICY "authenticated_manage_testimonials"
ON public.testimonials
FOR ALL
TO authenticated
USING (public.is_authenticated_user())
WITH CHECK (public.is_authenticated_user());

-- 10. Create function for new user handling
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
SECURITY DEFINER
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, full_name, role)
  VALUES (
    NEW.id, 
    NEW.email, 
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    COALESCE((NEW.raw_user_meta_data->>'role')::public.user_role, 'editor'::public.user_role)
  );
  RETURN NEW;
END;
$$;

-- 11. Create trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 12. Insert sample data
DO $$
DECLARE
    admin_uuid UUID := gen_random_uuid();
    project1_uuid UUID := gen_random_uuid();
    project2_uuid UUID := gen_random_uuid();
    project3_uuid UUID := gen_random_uuid();
    service1_uuid UUID := gen_random_uuid();
    service2_uuid UUID := gen_random_uuid();
    service3_uuid UUID := gen_random_uuid();
BEGIN
    -- Create admin user in auth.users
    INSERT INTO auth.users (
        id, instance_id, aud, role, email, encrypted_password, email_confirmed_at,
        created_at, updated_at, raw_user_meta_data, raw_app_meta_data,
        is_sso_user, is_anonymous, confirmation_token, confirmation_sent_at,
        recovery_token, recovery_sent_at, email_change_token_new, email_change,
        email_change_sent_at, email_change_token_current, email_change_confirm_status,
        reauthentication_token, reauthentication_sent_at, phone, phone_change,
        phone_change_token, phone_change_sent_at
    ) VALUES (
        admin_uuid, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
        'admin@hntisolucoes.com', crypt('admin123', gen_salt('bf', 10)), now(), now(), now(),
        '{"full_name": "Admin HN TI", "role": "admin"}'::jsonb, 
        '{"provider": "email", "providers": ["email"]}'::jsonb,
        false, false, '', null, '', null, '', '', null, '', 0, '', null, null, '', '', null
    );

    -- Insert sample projects
    INSERT INTO public.projects (id, title, description, image_url, project_url, technologies, service_type, status, created_by, featured, completed_at) VALUES
        (project1_uuid, 'E-commerce Sustentável', 'Plataforma de e-commerce para produtos sustentáveis com integração de pagamento e gestão de estoque', '/api/placeholder/600/400', 'https://ecommerce-sustentavel.com.br', '["React", "Node.js", "PostgreSQL", "Stripe"]'::jsonb, 'ecommerce'::public.service_type, 'completed'::public.project_status, admin_uuid, true, now() - interval '30 days'),
        (project2_uuid, 'Site Corporativo Advogados', 'Website institucional para escritório de advocacia com área de clientes e blog', '/api/placeholder/600/400', 'https://advocacia-moderna.com.br', '["React", "Tailwind CSS", "Headless CMS"]'::jsonb, 'website'::public.service_type, 'completed'::public.project_status, admin_uuid, true, now() - interval '60 days'),
        (project3_uuid, 'App Delivery Local', 'Aplicativo de delivery para restaurantes locais com painel administrativo', '/api/placeholder/600/400', 'https://delivery-local.com.br', '["React Native", "Firebase", "Node.js"]'::jsonb, 'website'::public.service_type, 'completed'::public.project_status, admin_uuid, false, now() - interval '90 days');

    -- Insert sample services
    INSERT INTO public.services (id, name, description, short_description, icon, price_range, features, active, created_by) VALUES
        (service1_uuid, 'Sites Institucionais', 'Criação de websites profissionais que representam sua marca de forma única e convertem visitantes em clientes', 'Sites profissionais que convertem', 'Globe', 'R$ 1.500 - R$ 5.000', '["Design Responsivo", "SEO Otimizado", "Integração WhatsApp", "Formulários de Contato", "Hospedagem Inclusa"]'::jsonb, true, admin_uuid),
        (service2_uuid, 'E-commerce Completo', 'Lojas virtuais completas com sistema de pagamento, gestão de produtos e painel administrativo', 'Lojas virtuais que vendem', 'ShoppingCart', 'R$ 3.000 - R$ 15.000', '["Catálogo de Produtos", "Carrinho de Compras", "Pagamento Integrado", "Painel Admin", "Relatórios de Vendas", "Integração Correios"]'::jsonb, true, admin_uuid),
        (service3_uuid, 'Consultoria Digital', 'Análise completa da presença digital do seu negócio com estratégias personalizadas', 'Estratégias digitais eficazes', 'Users', 'R$ 500 - R$ 2.000', '["Auditoria Digital", "Estratégia de Conteúdo", "Análise de Concorrência", "Plano de Ação", "Acompanhamento Mensal"]'::jsonb, true, admin_uuid);

    -- Insert sample testimonials
    INSERT INTO public.testimonials (client_name, client_position, client_company, content, rating, project_id, featured, active, created_by) VALUES
        ('Maria Silva', 'Proprietária', 'Boutique Sustentável', 'O site criado pela HN TI transformou meu negócio! As vendas online aumentaram 300% no primeiro mês. Recomendo muito o trabalho do Henrique.', 5, project1_uuid, true, true, admin_uuid),
        ('Dr. Carlos Mendes', 'Sócio Fundador', 'Mendes & Associados', 'Profissionalismo e qualidade excepcionais. O novo site trouxe credibilidade ao nosso escritório e facilitou o contato com novos clientes.', 5, project2_uuid, true, true, admin_uuid),
        ('João Santos', 'Gerente', 'Restaurante Sabor Local', 'A solução de delivery criada foi perfeita para nosso negócio. Interface simples e funcional que nossos clientes adoraram usar.', 4, project3_uuid, false, true, admin_uuid);

EXCEPTION
    WHEN foreign_key_violation THEN
        RAISE NOTICE 'Foreign key error: %', SQLERRM;
    WHEN unique_violation THEN
        RAISE NOTICE 'Unique constraint error: %', SQLERRM;
    WHEN OTHERS THEN
        RAISE NOTICE 'Unexpected error: %', SQLERRM;
END $$;