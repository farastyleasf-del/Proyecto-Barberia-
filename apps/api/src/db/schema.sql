-- Schema base para Barbería Premium

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  role varchar(20) not null check (role in ('admin', 'barber')),
  full_name varchar(120) not null,
  email varchar(120) unique not null,
  phone varchar(30),
  password_hash text,
  active boolean default true,
  created_at timestamp with time zone default now()
);

create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  name varchar(120) not null,
  description text,
  duration_minutes integer not null,
  price_cents integer not null,
  active boolean default true,
  created_at timestamp with time zone default now()
);

create table if not exists barbers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  bio text,
  photo_url text,
  active boolean default true,
  created_at timestamp with time zone default now()
);

create table if not exists working_hours (
  id uuid primary key default gen_random_uuid(),
  barber_id uuid references barbers(id),
  day_of_week integer not null,
  start_time time not null,
  end_time time not null
);

create table if not exists appointments (
  id uuid primary key default gen_random_uuid(),
  service_id uuid references services(id),
  barber_id uuid references barbers(id),
  client_name varchar(120) not null,
  client_phone varchar(30),
  client_email varchar(120),
  start_time timestamp with time zone not null,
  end_time timestamp with time zone not null,
  status varchar(20) not null default 'scheduled',
  created_at timestamp with time zone default now()
);

create table if not exists payment_methods (
  id uuid primary key default gen_random_uuid(),
  name varchar(80) not null,
  provider varchar(80),
  active boolean default true
);

create table if not exists payments (
  id uuid primary key default gen_random_uuid(),
  appointment_id uuid references appointments(id),
  payment_method_id uuid references payment_methods(id),
  amount_cents integer not null,
  status varchar(20) not null default 'pending',
  reference varchar(120),
  created_at timestamp with time zone default now()
);
