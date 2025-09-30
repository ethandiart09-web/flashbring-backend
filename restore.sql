--
-- PostgreSQL database dump
--

\restrict TUW8dlr1QCmxjT0b8tO9Xs7i7RYDELBUcKCGd3UpwIiB6c4zW3BQ8AI5Nk4dmxd

-- Dumped from database version 14.19 (Homebrew)
-- Dumped by pg_dump version 14.19 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: vector; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS vector WITH SCHEMA public;


--
-- Name: EXTENSION vector; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION vector IS 'vector data type and ivfflat and hnsw access methods';


--
-- Name: Category; Type: TYPE; Schema: public; Owner: flash_user
--

CREATE TYPE public."Category" AS ENUM (
    'food',
    'fashion',
    'gifts',
    'tech',
    'home',
    'grocery',
    'pharma'
);


ALTER TYPE public."Category" OWNER TO flash_user;

--
-- Name: Material; Type: TYPE; Schema: public; Owner: flash_user
--

CREATE TYPE public."Material" AS ENUM (
    'COTON',
    'LIN',
    'LAINE',
    'SOIE',
    'POLYESTER',
    'VISCOSE',
    'DENIM'
);


ALTER TYPE public."Material" OWNER TO flash_user;

--
-- Name: ProductCondition; Type: TYPE; Schema: public; Owner: flash_user
--

CREATE TYPE public."ProductCondition" AS ENUM (
    'NEUF',
    'OCCASION',
    'RECONDITIONNE'
);


ALTER TYPE public."ProductCondition" OWNER TO flash_user;

--
-- Name: Role; Type: TYPE; Schema: public; Owner: flash_user
--

CREATE TYPE public."Role" AS ENUM (
    'client',
    'driver',
    'store',
    'admin',
    'pending_store',
    'pending_driver'
);


ALTER TYPE public."Role" OWNER TO flash_user;

--
-- Name: main_category_enum; Type: TYPE; Schema: public; Owner: flash_user
--

CREATE TYPE public.main_category_enum AS ENUM (
    'Mobilier',
    'Cuisine & Vaisselle',
    'Textile & Déco',
    'Salle de bain',
    'Jardin & Terrasse',
    'Bricolage & Maison'
);


ALTER TYPE public.main_category_enum OWNER TO flash_user;

--
-- Name: product_condition; Type: TYPE; Schema: public; Owner: flash_user
--

CREATE TYPE public.product_condition AS ENUM (
    'NEUF',
    'OCCASION',
    'RECONDITIONNE'
);


ALTER TYPE public.product_condition OWNER TO flash_user;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: admin_earnings; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.admin_earnings (
    id integer NOT NULL,
    order_id integer NOT NULL,
    amount double precision NOT NULL,
    created_at timestamp(3) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.admin_earnings OWNER TO flash_user;

--
-- Name: admin_earnings_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.admin_earnings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admin_earnings_id_seq OWNER TO flash_user;

--
-- Name: admin_earnings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.admin_earnings_id_seq OWNED BY public.admin_earnings.id;


--
-- Name: brands; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.brands (
    id integer NOT NULL,
    name character varying(100) NOT NULL
);


ALTER TABLE public.brands OWNER TO flash_user;

--
-- Name: brands_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.brands_id_seq OWNER TO flash_user;

--
-- Name: brands_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.brands_id_seq OWNED BY public.brands.id;


--
-- Name: bundle_items; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.bundle_items (
    id integer NOT NULL,
    bundle_id integer NOT NULL,
    item_id integer NOT NULL
);


ALTER TABLE public.bundle_items OWNER TO flash_user;

--
-- Name: bundle_items_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.bundle_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bundle_items_id_seq OWNER TO flash_user;

--
-- Name: bundle_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.bundle_items_id_seq OWNED BY public.bundle_items.id;


--
-- Name: bundles; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.bundles (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.bundles OWNER TO flash_user;

--
-- Name: bundles_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.bundles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bundles_id_seq OWNER TO flash_user;

--
-- Name: bundles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.bundles_id_seq OWNED BY public.bundles.id;


--
-- Name: cart_items; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.cart_items (
    id integer NOT NULL,
    user_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer NOT NULL,
    created_at timestamp(3) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.cart_items OWNER TO flash_user;

--
-- Name: cart_items_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.cart_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cart_items_id_seq OWNER TO flash_user;

--
-- Name: cart_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.cart_items_id_seq OWNED BY public.cart_items.id;


--
-- Name: cart_supplements; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.cart_supplements (
    id integer NOT NULL,
    cart_item_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer DEFAULT 1 NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.cart_supplements OWNER TO flash_user;

--
-- Name: cart_supplements_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.cart_supplements_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cart_supplements_id_seq OWNER TO flash_user;

--
-- Name: cart_supplements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.cart_supplements_id_seq OWNED BY public.cart_supplements.id;


--
-- Name: deliveries; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.deliveries (
    id integer NOT NULL,
    order_id integer NOT NULL,
    driver_id integer,
    status text NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    lat double precision,
    lng double precision,
    delivery_code text DEFAULT '0000'::text NOT NULL,
    delivery_option text,
    instructions text,
    delivery_date date NOT NULL,
    delivery_slot text NOT NULL
);


ALTER TABLE public.deliveries OWNER TO flash_user;

--
-- Name: deliveries_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.deliveries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.deliveries_id_seq OWNER TO flash_user;

--
-- Name: deliveries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.deliveries_id_seq OWNED BY public.deliveries.id;


--
-- Name: driver_earnings; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.driver_earnings (
    id integer NOT NULL,
    driver_id integer NOT NULL,
    order_id integer NOT NULL,
    amount double precision NOT NULL,
    created_at timestamp(3) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.driver_earnings OWNER TO flash_user;

--
-- Name: driver_earnings_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.driver_earnings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.driver_earnings_id_seq OWNER TO flash_user;

--
-- Name: driver_earnings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.driver_earnings_id_seq OWNED BY public.driver_earnings.id;


--
-- Name: drivers; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.drivers (
    id integer NOT NULL,
    name text NOT NULL,
    phone text NOT NULL,
    vehicle_type text,
    created_at timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP,
    is_available boolean DEFAULT true
);


ALTER TABLE public.drivers OWNER TO flash_user;

--
-- Name: drivers_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.drivers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.drivers_id_seq OWNER TO flash_user;

--
-- Name: drivers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.drivers_id_seq OWNED BY public.drivers.id;


--
-- Name: favorites; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.favorites (
    id integer NOT NULL,
    user_id integer NOT NULL,
    store_id integer NOT NULL,
    created_at timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.favorites OWNER TO flash_user;

--
-- Name: favorites_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.favorites_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.favorites_id_seq OWNER TO flash_user;

--
-- Name: favorites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.favorites_id_seq OWNED BY public.favorites.id;


--
-- Name: order_item_supplements; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.order_item_supplements (
    id integer NOT NULL,
    order_item_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer DEFAULT 1 NOT NULL,
    price numeric(65,30) DEFAULT 0.0 NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.order_item_supplements OWNER TO flash_user;

--
-- Name: order_item_supplements_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.order_item_supplements_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_item_supplements_id_seq OWNER TO flash_user;

--
-- Name: order_item_supplements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.order_item_supplements_id_seq OWNED BY public.order_item_supplements.id;


--
-- Name: order_items; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.order_items (
    id integer NOT NULL,
    order_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer NOT NULL,
    price numeric(65,30) NOT NULL
);


ALTER TABLE public.order_items OWNER TO flash_user;

--
-- Name: order_items_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.order_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_items_id_seq OWNER TO flash_user;

--
-- Name: order_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.order_items_id_seq OWNED BY public.order_items.id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    user_id integer NOT NULL,
    store_id integer NOT NULL,
    status text DEFAULT 'pending'::text NOT NULL,
    total double precision NOT NULL,
    created_at timestamp(3) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    category text,
    image text,
    delivery_option text,
    instructions text,
    payment_method text,
    delivery_fee double precision DEFAULT 0.0 NOT NULL,
    service_fee double precision DEFAULT 0.0 NOT NULL,
    payment_intent_id text
);


ALTER TABLE public.orders OWNER TO flash_user;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO flash_user;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: payment_methods; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.payment_methods (
    id integer NOT NULL,
    user_id integer NOT NULL,
    type text NOT NULL,
    provider text NOT NULL,
    token text NOT NULL,
    last4 text NOT NULL,
    brand text NOT NULL,
    created_at timestamp(3) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    is_default boolean DEFAULT false NOT NULL
);


ALTER TABLE public.payment_methods OWNER TO flash_user;

--
-- Name: payment_methods_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.payment_methods_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.payment_methods_id_seq OWNER TO flash_user;

--
-- Name: payment_methods_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.payment_methods_id_seq OWNED BY public.payment_methods.id;


--
-- Name: product_bundles; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.product_bundles (
    id integer NOT NULL,
    product_id integer NOT NULL,
    bundle_id integer NOT NULL
);


ALTER TABLE public.product_bundles OWNER TO flash_user;

--
-- Name: product_bundles_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.product_bundles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_bundles_id_seq OWNER TO flash_user;

--
-- Name: product_bundles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.product_bundles_id_seq OWNED BY public.product_bundles.id;


--
-- Name: product_images; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.product_images (
    id integer NOT NULL,
    product_id integer,
    image_url character varying(500) NOT NULL
);


ALTER TABLE public.product_images OWNER TO flash_user;

--
-- Name: product_images_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.product_images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_images_id_seq OWNER TO flash_user;

--
-- Name: product_images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.product_images_id_seq OWNED BY public.product_images.id;


--
-- Name: product_option_values; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.product_option_values (
    id integer NOT NULL,
    option_id integer NOT NULL,
    value character varying(255) NOT NULL,
    image_url character varying(500)
);


ALTER TABLE public.product_option_values OWNER TO flash_user;

--
-- Name: product_option_values_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.product_option_values_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_option_values_id_seq OWNER TO flash_user;

--
-- Name: product_option_values_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.product_option_values_id_seq OWNED BY public.product_option_values.id;


--
-- Name: product_options; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.product_options (
    id integer NOT NULL,
    product_id integer NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.product_options OWNER TO flash_user;

--
-- Name: product_options_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.product_options_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_options_id_seq OWNER TO flash_user;

--
-- Name: product_options_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.product_options_id_seq OWNED BY public.product_options.id;


--
-- Name: product_reviews; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.product_reviews (
    id integer NOT NULL,
    product_id integer NOT NULL,
    user_id integer,
    rating integer NOT NULL,
    comment text,
    created_at timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.product_reviews OWNER TO flash_user;

--
-- Name: product_reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.product_reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_reviews_id_seq OWNER TO flash_user;

--
-- Name: product_reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.product_reviews_id_seq OWNED BY public.product_reviews.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.products (
    id integer NOT NULL,
    store_id integer NOT NULL,
    name text NOT NULL,
    description text,
    price numeric(65,30) NOT NULL,
    stock integer DEFAULT 0 NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    category text DEFAULT 'food'::text NOT NULL,
    image_url character varying(500),
    main_category public.main_category_enum,
    sub_category character varying(100),
    ingredients text,
    order_count integer DEFAULT 0 NOT NULL,
    option_title text,
    max_dessert integer DEFAULT 0,
    max_drink integer DEFAULT 0,
    max_food integer DEFAULT 0,
    gender character varying(20),
    color character varying(50),
    material public."Material",
    rating real DEFAULT 4.0,
    review_count integer DEFAULT 12,
    condition public.product_condition DEFAULT 'NEUF'::public.product_condition,
    brand_id integer,
    tech_category_id integer,
    accessory_id integer,
    servings integer DEFAULT 1 NOT NULL,
    embedding public.vector,
    section_id integer
);


ALTER TABLE public.products OWNER TO flash_user;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO flash_user;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: refresh_tokens; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.refresh_tokens (
    id integer NOT NULL,
    user_id integer NOT NULL,
    token text NOT NULL,
    expires_at timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.refresh_tokens OWNER TO flash_user;

--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.refresh_tokens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.refresh_tokens_id_seq OWNER TO flash_user;

--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.refresh_tokens_id_seq OWNED BY public.refresh_tokens.id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.reviews (
    id integer NOT NULL,
    user_id integer,
    order_id integer,
    rating integer,
    comment text,
    created_at timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP,
    approved boolean DEFAULT false,
    title text,
    experience_date date,
    product_id integer,
    store_id integer
);


ALTER TABLE public.reviews OWNER TO flash_user;

--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reviews_id_seq OWNER TO flash_user;

--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;


--
-- Name: search_logs; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.search_logs (
    id integer NOT NULL,
    user_id integer,
    query text NOT NULL,
    created_at timestamp(6) without time zone DEFAULT CURRENT_TIMESTAMP,
    results_count integer
);


ALTER TABLE public.search_logs OWNER TO flash_user;

--
-- Name: search_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.search_logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.search_logs_id_seq OWNER TO flash_user;

--
-- Name: search_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.search_logs_id_seq OWNED BY public.search_logs.id;


--
-- Name: store_earnings; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.store_earnings (
    id integer NOT NULL,
    store_id integer NOT NULL,
    order_id integer NOT NULL,
    amount double precision NOT NULL,
    created_at timestamp(3) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.store_earnings OWNER TO flash_user;

--
-- Name: store_earnings_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.store_earnings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.store_earnings_id_seq OWNER TO flash_user;

--
-- Name: store_earnings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.store_earnings_id_seq OWNED BY public.store_earnings.id;


--
-- Name: store_hours; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.store_hours (
    id integer NOT NULL,
    store_id integer NOT NULL,
    day character varying(20) NOT NULL,
    open time(6) without time zone NOT NULL,
    close time(6) without time zone NOT NULL
);


ALTER TABLE public.store_hours OWNER TO flash_user;

--
-- Name: store_hours_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.store_hours_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.store_hours_id_seq OWNER TO flash_user;

--
-- Name: store_hours_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.store_hours_id_seq OWNED BY public.store_hours.id;


--
-- Name: store_sections; Type: TABLE; Schema: public; Owner: ethandiart
--

CREATE TABLE public.store_sections (
    id integer NOT NULL,
    store_id integer NOT NULL,
    name character varying(100) NOT NULL,
    "position" integer DEFAULT 0,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.store_sections OWNER TO ethandiart;

--
-- Name: store_sections_id_seq; Type: SEQUENCE; Schema: public; Owner: ethandiart
--

CREATE SEQUENCE public.store_sections_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.store_sections_id_seq OWNER TO ethandiart;

--
-- Name: store_sections_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ethandiart
--

ALTER SEQUENCE public.store_sections_id_seq OWNED BY public.store_sections.id;


--
-- Name: stores; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.stores (
    id integer NOT NULL,
    name text NOT NULL,
    address text,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    user_id integer NOT NULL,
    sheet_id character varying(255),
    banner_url character varying(500),
    lat double precision,
    lng double precision,
    max_km integer DEFAULT 10 NOT NULL,
    category public."Category" DEFAULT 'food'::public."Category" NOT NULL,
    subcategory text[],
    diet_type character varying(50),
    is_partner boolean DEFAULT false,
    store_type character varying(100),
    recommended_for text[] DEFAULT ARRAY[]::text[],
    rating real DEFAULT 0,
    review_count integer DEFAULT 0
);


ALTER TABLE public.stores OWNER TO flash_user;

--
-- Name: stores_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.stores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.stores_id_seq OWNER TO flash_user;

--
-- Name: stores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.stores_id_seq OWNED BY public.stores.id;


--
-- Name: tech_accessories; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.tech_accessories (
    id integer NOT NULL,
    name character varying(100) NOT NULL
);


ALTER TABLE public.tech_accessories OWNER TO flash_user;

--
-- Name: tech_accessories_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.tech_accessories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tech_accessories_id_seq OWNER TO flash_user;

--
-- Name: tech_accessories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.tech_accessories_id_seq OWNED BY public.tech_accessories.id;


--
-- Name: tech_categories; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.tech_categories (
    id integer NOT NULL,
    name character varying(100) NOT NULL
);


ALTER TABLE public.tech_categories OWNER TO flash_user;

--
-- Name: tech_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.tech_categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tech_categories_id_seq OWNER TO flash_user;

--
-- Name: tech_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.tech_categories_id_seq OWNED BY public.tech_categories.id;


--
-- Name: user_delivery_preferences; Type: TABLE; Schema: public; Owner: ethandiart
--

CREATE TABLE public.user_delivery_preferences (
    user_id integer NOT NULL,
    store_id integer NOT NULL,
    delivery_date date NOT NULL,
    delivery_slot text NOT NULL
);


ALTER TABLE public.user_delivery_preferences OWNER TO ethandiart;

--
-- Name: user_logs; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.user_logs (
    id integer NOT NULL,
    user_id integer NOT NULL,
    action text NOT NULL,
    created_at timestamp(3) with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.user_logs OWNER TO flash_user;

--
-- Name: user_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.user_logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_logs_id_seq OWNER TO flash_user;

--
-- Name: user_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.user_logs_id_seq OWNED BY public.user_logs.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: flash_user
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email text NOT NULL,
    password_hash text NOT NULL,
    firstname text,
    lastname text,
    street text,
    city text,
    postal text,
    stripe_customer_id text,
    refresh_token text,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    delivery_code text DEFAULT '0000'::text NOT NULL,
    vehicle text,
    google_id text,
    phone character varying(255),
    twofa_enabled boolean DEFAULT false NOT NULL,
    twofa_method text,
    twofa_secret text,
    twofa_temp_code text,
    webauthn_credentials jsonb DEFAULT '[]'::jsonb NOT NULL,
    role public."Role" NOT NULL,
    last_login timestamp(3) without time zone,
    lat double precision,
    lng double precision
);


ALTER TABLE public.users OWNER TO flash_user;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: flash_user
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO flash_user;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: flash_user
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: admin_earnings id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.admin_earnings ALTER COLUMN id SET DEFAULT nextval('public.admin_earnings_id_seq'::regclass);


--
-- Name: brands id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.brands ALTER COLUMN id SET DEFAULT nextval('public.brands_id_seq'::regclass);


--
-- Name: bundle_items id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.bundle_items ALTER COLUMN id SET DEFAULT nextval('public.bundle_items_id_seq'::regclass);


--
-- Name: bundles id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.bundles ALTER COLUMN id SET DEFAULT nextval('public.bundles_id_seq'::regclass);


--
-- Name: cart_items id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.cart_items ALTER COLUMN id SET DEFAULT nextval('public.cart_items_id_seq'::regclass);


--
-- Name: cart_supplements id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.cart_supplements ALTER COLUMN id SET DEFAULT nextval('public.cart_supplements_id_seq'::regclass);


--
-- Name: deliveries id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.deliveries ALTER COLUMN id SET DEFAULT nextval('public.deliveries_id_seq'::regclass);


--
-- Name: driver_earnings id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.driver_earnings ALTER COLUMN id SET DEFAULT nextval('public.driver_earnings_id_seq'::regclass);


--
-- Name: drivers id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.drivers ALTER COLUMN id SET DEFAULT nextval('public.drivers_id_seq'::regclass);


--
-- Name: favorites id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.favorites ALTER COLUMN id SET DEFAULT nextval('public.favorites_id_seq'::regclass);


--
-- Name: order_item_supplements id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.order_item_supplements ALTER COLUMN id SET DEFAULT nextval('public.order_item_supplements_id_seq'::regclass);


--
-- Name: order_items id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.order_items ALTER COLUMN id SET DEFAULT nextval('public.order_items_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Name: payment_methods id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.payment_methods ALTER COLUMN id SET DEFAULT nextval('public.payment_methods_id_seq'::regclass);


--
-- Name: product_bundles id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.product_bundles ALTER COLUMN id SET DEFAULT nextval('public.product_bundles_id_seq'::regclass);


--
-- Name: product_images id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.product_images ALTER COLUMN id SET DEFAULT nextval('public.product_images_id_seq'::regclass);


--
-- Name: product_option_values id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.product_option_values ALTER COLUMN id SET DEFAULT nextval('public.product_option_values_id_seq'::regclass);


--
-- Name: product_options id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.product_options ALTER COLUMN id SET DEFAULT nextval('public.product_options_id_seq'::regclass);


--
-- Name: product_reviews id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.product_reviews ALTER COLUMN id SET DEFAULT nextval('public.product_reviews_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: refresh_tokens id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.refresh_tokens ALTER COLUMN id SET DEFAULT nextval('public.refresh_tokens_id_seq'::regclass);


--
-- Name: reviews id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);


--
-- Name: search_logs id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.search_logs ALTER COLUMN id SET DEFAULT nextval('public.search_logs_id_seq'::regclass);


--
-- Name: store_earnings id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.store_earnings ALTER COLUMN id SET DEFAULT nextval('public.store_earnings_id_seq'::regclass);


--
-- Name: store_hours id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.store_hours ALTER COLUMN id SET DEFAULT nextval('public.store_hours_id_seq'::regclass);


--
-- Name: store_sections id; Type: DEFAULT; Schema: public; Owner: ethandiart
--

ALTER TABLE ONLY public.store_sections ALTER COLUMN id SET DEFAULT nextval('public.store_sections_id_seq'::regclass);


--
-- Name: stores id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.stores ALTER COLUMN id SET DEFAULT nextval('public.stores_id_seq'::regclass);


--
-- Name: tech_accessories id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.tech_accessories ALTER COLUMN id SET DEFAULT nextval('public.tech_accessories_id_seq'::regclass);


--
-- Name: tech_categories id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.tech_categories ALTER COLUMN id SET DEFAULT nextval('public.tech_categories_id_seq'::regclass);


--
-- Name: user_logs id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.user_logs ALTER COLUMN id SET DEFAULT nextval('public.user_logs_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: admin_earnings; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.admin_earnings (id, order_id, amount, created_at) FROM stdin;
\.


--
-- Data for Name: brands; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.brands (id, name) FROM stdin;
\.


--
-- Data for Name: bundle_items; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.bundle_items (id, bundle_id, item_id) FROM stdin;
\.


--
-- Data for Name: bundles; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.bundles (id, name) FROM stdin;
\.


--
-- Data for Name: cart_items; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.cart_items (id, user_id, product_id, quantity, created_at) FROM stdin;
3	1	14	1	2025-09-28 11:16:54.482+02
4	1	31	1	2025-09-28 18:47:51.521+02
5	1	30	1	2025-09-28 18:56:20.112+02
\.


--
-- Data for Name: cart_supplements; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.cart_supplements (id, cart_item_id, product_id, quantity, created_at) FROM stdin;
\.


--
-- Data for Name: deliveries; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.deliveries (id, order_id, driver_id, status, created_at, lat, lng, delivery_code, delivery_option, instructions, delivery_date, delivery_slot) FROM stdin;
\.


--
-- Data for Name: driver_earnings; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.driver_earnings (id, driver_id, order_id, amount, created_at) FROM stdin;
\.


--
-- Data for Name: drivers; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.drivers (id, name, phone, vehicle_type, created_at, is_available) FROM stdin;
\.


--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.favorites (id, user_id, store_id, created_at) FROM stdin;
13	1	27	2025-09-25 12:12:16.657568
\.


--
-- Data for Name: order_item_supplements; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.order_item_supplements (id, order_item_id, product_id, quantity, price, created_at) FROM stdin;
1	2	31	5	2.500000000000000000000000000000	2025-09-28 09:03:48.778
2	4	31	5	2.500000000000000000000000000000	2025-09-28 09:16:03.001
3	6	31	5	2.500000000000000000000000000000	2025-09-28 09:16:56.601
4	8	31	5	2.500000000000000000000000000000	2025-09-28 12:29:38.512
5	11	31	5	2.500000000000000000000000000000	2025-09-28 16:05:37.393
6	14	31	5	2.500000000000000000000000000000	2025-09-28 16:15:14.894
\.


--
-- Data for Name: order_items; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.order_items (id, order_id, product_id, quantity, price) FROM stdin;
1	1	30	1	10.500000000000000000000000000000
2	1	30	1	10.500000000000000000000000000000
3	2	30	1	10.500000000000000000000000000000
4	2	30	1	10.500000000000000000000000000000
5	3	30	1	10.500000000000000000000000000000
6	3	30	1	10.500000000000000000000000000000
7	3	14	1	2.100000000000000000000000000000
8	4	30	1	10.500000000000000000000000000000
9	4	14	1	2.100000000000000000000000000000
10	4	30	2	10.500000000000000000000000000000
11	5	30	1	10.500000000000000000000000000000
12	5	14	1	2.100000000000000000000000000000
13	5	30	2	10.500000000000000000000000000000
14	6	30	1	10.500000000000000000000000000000
15	6	14	1	2.100000000000000000000000000000
16	6	30	2	10.500000000000000000000000000000
17	7	14	1	2.100000000000000000000000000000
18	7	31	1	2.500000000000000000000000000000
19	7	30	1	10.500000000000000000000000000000
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.orders (id, user_id, store_id, status, total, created_at, category, image, delivery_option, instructions, payment_method, delivery_fee, service_fee, payment_intent_id) FROM stdin;
1	1	3	pending	40.58	2025-09-28 11:03:48.778+02	\N	\N	\N	\N	card:2	5.4	1.68	\N
2	1	3	pending	40.58	2025-09-28 11:16:03.001+02	\N	\N	\N	\N	card:2	5.4	1.68	\N
3	1	3	pending	42.78	2025-09-28 11:16:56.601+02	\N	\N	\N	\N	card:2	5.4	1.78	\N
4	1	3	pending	53.81	2025-09-28 14:29:38.512+02	\N	\N	\N	\N	card:2	5.4	2.31	\N
5	1	3	pending	53.81	2025-09-28 18:05:37.393+02	\N	\N	\N	\N	card:2	5.4	2.31	\N
6	1	3	pending	53.81	2025-09-28 18:15:14.894+02	\N	\N	\N	\N	card:2	5.4	2.31	\N
7	1	14	pending	21.26	2025-09-28 22:46:32.717+02	\N	\N	\N	\N	card:2	5.4	0.76	\N
\.


--
-- Data for Name: payment_methods; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.payment_methods (id, user_id, type, provider, token, last4, brand, created_at, is_default) FROM stdin;
2	1	card	stripe	pm_1SAy9ULNzGlAd8NWk2OW9M24	4242	visa	2025-09-24 21:14:57.796+02	f
\.


--
-- Data for Name: product_bundles; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.product_bundles (id, product_id, bundle_id) FROM stdin;
\.


--
-- Data for Name: product_images; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.product_images (id, product_id, image_url) FROM stdin;
\.


--
-- Data for Name: product_option_values; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.product_option_values (id, option_id, value, image_url) FROM stdin;
\.


--
-- Data for Name: product_options; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.product_options (id, product_id, name) FROM stdin;
\.


--
-- Data for Name: product_reviews; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.product_reviews (id, product_id, user_id, rating, comment, created_at) FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.products (id, store_id, name, description, price, stock, created_at, is_active, category, image_url, main_category, sub_category, ingredients, order_count, option_title, max_dessert, max_drink, max_food, gender, color, material, rating, review_count, condition, brand_id, tech_category_id, accessory_id, servings, embedding, section_id) FROM stdin;
2	14	Baguette tradition	Baguette fraîche du jour	1.200000000000000000000000000000	200	2025-09-24 11:38:26.365	t	pains_patisseries	https://upload.wikimedia.org/wikipedia/commons/0/0c/French_baguette.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
3	14	Pommes Golden	Pommes fraîches issues de producteurs locaux	2.990000000000000000000000000000	100	2025-09-24 11:41:44.896	t	fruit_legumes	https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
4	14	Coca-Cola 1,5L	Boisson gazeuse rafraîchissante	1.790000000000000000000000000000	200	2025-09-24 11:41:44.896	t	eaux_sodas	https://upload.wikimedia.org/wikipedia/commons/c/cb/Coca-Cola_bottle_background.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
5	14	Camembert Président	Fromage au lait de vache, 250g	2.490000000000000000000000000000	50	2025-09-24 11:41:44.896	t	fromagerie	https://upload.wikimedia.org/wikipedia/commons/1/19/Camembert_cheese.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
6	14	Pâtes premier prix	500g de pâtes basiques	0.890000000000000000000000000000	300	2025-09-24 11:41:44.896	t	petits_prix	https://upload.wikimedia.org/wikipedia/commons/0/0c/Fusilli_pasta.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
7	14	Sandwich jambon beurre	Sandwich classique frais	3.500000000000000000000000000000	40	2025-09-24 11:41:44.896	t	repas_express	https://upload.wikimedia.org/wikipedia/commons/4/4f/Ham_sandwich.png	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
8	14	Baguette tradition	Pain croustillant du jour	1.200000000000000000000000000000	80	2025-09-24 11:41:44.896	t	pains_patisseries	https://upload.wikimedia.org/wikipedia/commons/3/3e/French_baguettes.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
9	14	Petit Beurre LU	Biscuits secs classiques	1.500000000000000000000000000000	120	2025-09-24 11:41:44.896	t	biscuits_gouter	https://upload.wikimedia.org/wikipedia/commons/0/0b/Petit_beurre_LU.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
18	14	Gel douche Dove	Flacon 250ml	2.900000000000000000000000000000	120	2025-09-24 11:41:44.896	t	hygiene	https://upload.wikimedia.org/wikipedia/commons/1/16/Shampoo_bottle.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
19	14	Steak haché 2x125g	Viande de bœuf française	4.500000000000000000000000000000	40	2025-09-24 11:41:44.896	t	boucherie	https://upload.wikimedia.org/wikipedia/commons/f/f3/Raw_meat.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
20	14	Ketchup Heinz	Bouteille 500ml	2.300000000000000000000000000000	90	2025-09-24 11:41:44.896	t	sauces	https://upload.wikimedia.org/wikipedia/commons/6/65/Ketchup.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
21	14	Heineken 6x25cl	Bière blonde	5.400000000000000000000000000000	60	2025-09-24 11:41:44.896	t	cave_bieres	https://upload.wikimedia.org/wikipedia/commons/b/bb/Heineken_Beer.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
22	14	Nutella 400g	Pâte à tartiner chocolat-noisettes	3.900000000000000000000000000000	70	2025-09-24 11:41:44.896	t	petit_dejeuner	https://upload.wikimedia.org/wikipedia/commons/d/d2/Nutella.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
23	14	Doliprane 500mg	Boîte de 16 comprimés	2.000000000000000000000000000000	30	2025-09-24 11:41:44.896	t	parapharmacie	https://upload.wikimedia.org/wikipedia/commons/6/68/Doliprane.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
24	14	Poulet rôti entier	Prêt à déguster	7.900000000000000000000000000000	20	2025-09-24 11:41:44.896	t	volaille_rotisserie	https://upload.wikimedia.org/wikipedia/commons/0/0c/Roast_chicken.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
25	14	Haricots verts en conserve	Bocal de 400g	1.500000000000000000000000000000	80	2025-09-24 11:41:44.896	t	conserves_bocaux	https://upload.wikimedia.org/wikipedia/commons/8/89/Green_beans_in_can.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
26	14	Liquide vaisselle Paic	Flacon 500ml	1.900000000000000000000000000000	100	2025-09-24 11:41:44.896	t	maison	https://upload.wikimedia.org/wikipedia/commons/9/9e/Dishwashing_liquid.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
27	14	Saumon frais	Pavé de 200g	5.500000000000000000000000000000	30	2025-09-24 11:41:44.896	t	poissonnerie	https://upload.wikimedia.org/wikipedia/commons/1/18/Salmon.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
28	14	Couches Pampers	Pack de 30 couches	9.900000000000000000000000000000	40	2025-09-24 11:41:44.896	t	monde_bebe	https://upload.wikimedia.org/wikipedia/commons/3/3e/Diapers.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
29	3	Pizza Margherita	Pizza classique avec mozzarella et basilic frais	8.900000000000000000000000000000	50	2025-09-24 12:14:19.493	t	food	https://upload.wikimedia.org/wikipedia/commons/9/97/Margherita_Originale.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
30	3	Pizza Reine	Pizza garnie de jambon, champignons et mozzarella	10.500000000000000000000000000000	40	2025-09-24 12:14:19.493	t	food	https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
31	3	Coca-Cola 33cl	Boisson gazeuse rafraîchissante	2.500000000000000000000000000000	100	2025-09-24 12:14:19.493	t	drink	https://upload.wikimedia.org/wikipedia/commons/6/6b/Coca-Cola_Bottle_%28Mexico%29.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	\N
10	14	Chips Lay’s Nature	Paquet de 150g	1.900000000000000000000000000000	150	2025-09-24 11:41:44.896	t	aperitif_dinatoire	https://upload.wikimedia.org/wikipedia/commons/f/f2/Potato_chips.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	1
11	14	Lait demi-écrémé 1L	Brique de lait UHT	1.100000000000000000000000000000	200	2025-09-24 11:41:44.896	t	laitage_frais	https://upload.wikimedia.org/wikipedia/commons/4/45/Milk_glass.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	1
12	14	Jambon Herta	4 tranches fines	2.800000000000000000000000000000	60	2025-09-24 11:41:44.896	t	charcuterie	https://upload.wikimedia.org/wikipedia/commons/9/9b/Jambon_blanc.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	1
13	14	Pizza surgelée	Pizza 4 fromages, 400g	3.990000000000000000000000000000	50	2025-09-24 11:41:44.896	t	surgeles	https://upload.wikimedia.org/wikipedia/commons/3/3a/Frozen_pizza.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	2
14	14	Yaourt nature Danone	Pack de 4 yaourts	2.100000000000000000000000000000	80	2025-09-24 11:41:44.896	t	yaourts_desserts	https://upload.wikimedia.org/wikipedia/commons/6/6e/Yoghurt.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	2
15	14	Kinder Bueno	2 barres chocolatées	1.200000000000000000000000000000	150	2025-09-24 11:41:44.896	t	confiseries	https://upload.wikimedia.org/wikipedia/commons/1/12/Kinder_Bueno.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	2
16	14	Café Carte Noire	Paquet moulu 250g	3.500000000000000000000000000000	70	2025-09-24 11:41:44.896	t	boissons_chaudes	https://upload.wikimedia.org/wikipedia/commons/4/45/Coffee_beans.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	3
17	14	Riz Basmati 1kg	Riz parfumé de qualité	2.800000000000000000000000000000	100	2025-09-24 11:41:44.896	t	pates_riz_feculents	https://upload.wikimedia.org/wikipedia/commons/6/6f/Basmati_rice.jpg	\N	\N	\N	0	\N	0	0	0	\N	\N	\N	4	12	NEUF	\N	\N	\N	1	\N	3
\.


--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.refresh_tokens (id, user_id, token, expires_at) FROM stdin;
14	1	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJldGhhbi5kaWFydDA5QGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1OTEzNDQxMCwiZXhwIjoxNzYwNDMwNDEwfQ.G2wEvW7ufcy_Rg95Pz4pzgIdEwe8UPeLJci_CbTWWUI	2025-10-14 08:26:50.268
\.


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.reviews (id, user_id, order_id, rating, comment, created_at, approved, title, experience_date, product_id, store_id) FROM stdin;
\.


--
-- Data for Name: search_logs; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.search_logs (id, user_id, query, created_at, results_count) FROM stdin;
\.


--
-- Data for Name: store_earnings; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.store_earnings (id, store_id, order_id, amount, created_at) FROM stdin;
\.


--
-- Data for Name: store_hours; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.store_hours (id, store_id, day, open, close) FROM stdin;
\.


--
-- Data for Name: store_sections; Type: TABLE DATA; Schema: public; Owner: ethandiart
--

COPY public.store_sections (id, store_id, name, "position", created_at) FROM stdin;
1	3	Menus	1	2025-09-28 18:41:17.974833
2	3	Burgers	2	2025-09-28 18:41:17.974833
3	3	Desserts	3	2025-09-28 18:41:17.974833
4	3	Boissons	4	2025-09-28 18:41:17.974833
5	3	Pizzas	1	2025-09-28 18:43:00.407773
6	3	Pizzas	1	2025-09-28 18:45:37.12845
7	3	Menus	2	2025-09-28 18:45:37.12845
8	3	Entrées	3	2025-09-28 18:45:37.12845
9	3	Desserts	4	2025-09-28 18:45:37.12845
10	3	Boissons	5	2025-09-28 18:45:37.12845
11	3	Sauces	6	2025-09-28 18:45:37.12845
\.


--
-- Data for Name: stores; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.stores (id, name, address, created_at, user_id, sheet_id, banner_url, lat, lng, max_km, category, subcategory, diet_type, is_partner, store_type, recommended_for, rating, review_count) FROM stdin;
9	Test Asiatique	Nancy, 54000 Nancy, France	2025-09-24 10:58:31.904	5	\N	https://upload.wikimedia.org/wikipedia/commons/0/0e/Chinese_food_in_London.jpg	48.6937223	6.1834097	10	food	{asiatique}	\N	f	\N	{}	0	0
10	Test Dessert	Nancy, 54000 Nancy, France	2025-09-24 10:58:31.904	5	\N	https://upload.wikimedia.org/wikipedia/commons/0/02/Dessert_in_Tokyo.jpg	48.6937223	6.1834097	10	food	{dessert}	\N	f	\N	{}	0	0
11	Test Italien	Nancy, 54000 Nancy, France	2025-09-24 10:58:31.904	5	\N	https://upload.wikimedia.org/wikipedia/commons/4/4d/Pasta_Puttanesca.jpg	48.6937223	6.1834097	10	food	{italien}	\N	f	\N	{}	0	0
12	Test Sandwich	Nancy, 54000 Nancy, France	2025-09-24 10:58:31.904	5	\N	https://upload.wikimedia.org/wikipedia/commons/4/45/Sandwich_with_salad.jpg	48.6937223	6.1834097	10	food	{sandwich}	\N	f	\N	{}	0	0
6	Test Halal	Nancy, 54000 Nancy, France	2025-09-24 10:58:31.904	5	\N	https://upload.wikimedia.org/wikipedia/commons/5/51/Halal_food_logo.jpg	48.6937223	6.1834097	10	food	{halal}	halal	f	\N	{}	0	0
7	Test Burgers	Nancy, 54000 Nancy, France	2025-09-24 10:58:31.904	5	\N	https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg	48.6937223	6.1834097	10	food	{burgers}	sans_gluten	f	\N	{}	0	0
19	Intermarché Nancy	Rue de Tomblaine, 54000 Nancy	2025-09-24 11:07:20.097	11	\N	https://upload.wikimedia.org/wikipedia/commons/a/a1/Intermarche_supermarket.jpg	48.6860612	6.1977851	10	grocery	{supermarche}	\N	f	\N	{}	0	0
8	Test Fast Food	Nancy, 54000 Nancy, France	2025-09-24 10:58:31.904	5	\N	https://upload.wikimedia.org/wikipedia/commons/4/4f/Fast_food_meal.jpg	48.6937223	6.1834097	10	food	{fastfood}	bio	f	\N	{}	0	0
14	Carrefour City Nancy	10 Rue St Nicolas, 54000 Nancy	2025-09-24 11:07:20.076	6	\N	https://upload.wikimedia.org/wikipedia/commons/c/cc/Supermarket_with_customer.jpg	48.6897311	6.1846549	10	grocery	{supermarche}	\N	t	\N	{}	0	0
13	Test Barbecue	Nancy, 54000 Nancy, France	2025-09-24 10:58:31.904	5	\N	https://upload.wikimedia.org/wikipedia/commons/0/0c/Barbecue_in_Sweden.jpg	48.6937223	6.1834097	10	food	{bbq}	\N	f	\N	{}	0	0
3	Pizzeria Luigi	12 Rue Saint-Dizier, Nancy	2025-09-24 10:58:13.437	5	\N	https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg	48.6915698	6.1817653	10	food	{pizza}	vegetarien	t	\N	{}	0	0
18	Auchan Nancy Lobau	Rue Marcel Brot, 54000 Nancy	2025-09-24 11:07:20.093	10	\N	https://upload.wikimedia.org/wikipedia/commons/f/f4/Auchan_Hypermarket.jpg	48.6865238	6.2012202	10	grocery	{hypermarché}	\N	t	\N	{}	0	0
5	Test Sushi	Nancy, 54000 Nancy, France	2025-09-24 10:58:31.904	5	\N	https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg	48.6937223	6.1834097	10	food	{sushi}	vegan	f	\N	{}	0	0
15	Carrefour Market Nancy Jeanne d’Arc	84 Rue Jeanne d’Arc, 54000 Nancy	2025-09-24 11:07:20.081	7	\N	https://upload.wikimedia.org/wikipedia/commons/8/88/Supermarket_interior.jpg	48.6841493	6.1728811	10	grocery	{supermarche}	\N	t	\N	{}	0	0
16	Lidl Nancy	Boulevard d’Austrasie, 54000 Nancy	2025-09-24 11:07:20.085	8	\N	https://upload.wikimedia.org/wikipedia/commons/5/5a/Lidl_supermarket.jpg	48.6951631	6.1965886	10	grocery	{discount}	\N	f	\N	{}	0	0
17	Monoprix Nancy	2 Rue Saint-Georges, 54000 Nancy	2025-09-24 11:07:20.089	9	\N	https://upload.wikimedia.org/wikipedia/commons/1/19/Monoprix_store.jpg	48.6907781	6.1827379	10	grocery	{supermarche}	\N	t	\N	{}	0	0
42	Cultura Houdemont	Zone Commerciale, 54180 Houdemont	2025-09-24 11:16:24.976	1	\N	https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200	48.6311	6.1795	10	gifts	{livres,fete,cadeaux}	\N	f	\N	{}	0	0
37	Darty Nancy	Boulevard de l’Europe, 54500 Vandœuvre-lès-Nancy	2025-09-24 11:14:28.677	1	\N	https://images.unsplash.com/photo-1555617980-c50f8c05f5b4?w=1200	48.6624696	6.172966	10	tech	{pc,electromenager,smartphones,accessoires}	\N	f	neuf	{}	0	0
38	Interflora Nancy	15 Rue Saint-Dizier, 54000 Nancy	2025-09-24 11:16:24.974	1	\N	https://images.unsplash.com/photo-1509043759401-136742328bb3?w=1200	48.6919529	6.1817313	10	gifts	{fleurs}	\N	t	\N	{}	0	0
39	Jeff de Bruges Nancy	18 Rue Saint-Georges, 54000 Nancy	2025-09-24 11:16:24.975	1	\N	https://images.unsplash.com/photo-1610563166150-4c7174f6b4e4?w=1200	48.708025	6.22108	10	gifts	{chocolats}	\N	f	\N	{}	0	0
40	Nature & Découvertes Nancy	Centre commercial Saint-Sébastien, 54000 Nancy	2025-09-24 11:16:24.975	1	\N	https://images.unsplash.com/photo-1616627562073-1edb5e4cb112?w=1200	48.6882752	6.180669	10	gifts	{bienetre,souvenirs,cadeaux}	\N	f	\N	{}	0	0
36	Boulanger Nancy	La Sapinière, 54520 Laxou	2025-09-24 11:14:28.677	1	\N	https://images.unsplash.com/photo-1587202372443-4c0d2b9da0c6?w=1200	48.6889757	6.1338782	10	tech	{pc,audio,enceintes,photo,accessoires}	\N	f	neuf	{}	0	0
41	JouéClub Nancy	Rue des Ponts, 54000 Nancy	2025-09-24 11:16:24.975	1	\N	https://images.unsplash.com/photo-1583511655826-05700d52f4a7?w=1200	48.6895554	6.1810242	10	gifts	{jouets}	\N	f	\N	{}	0	0
20	Biocoop Nancy	20 Rue Charles III, 54000 Nancy	2025-09-24 11:07:20.101	12	\N	https://upload.wikimedia.org/wikipedia/commons/9/98/Biocoop_store.jpg	48.6860523	6.1828341	10	grocery	{bio}	\N	t	\N	{}	0	0
21	Naturalia Nancy	14 Rue Saint-Dizier, 54000 Nancy	2025-09-24 11:07:20.107	13	\N	https://upload.wikimedia.org/wikipedia/commons/d/de/Naturalia_store.jpg	48.691546	6.1817797	10	grocery	{bio}	\N	f	\N	{}	0	0
23	Casino Supermarché Nancy	Boulevard Jean Jaurès, 54000 Nancy	2025-09-24 11:07:20.115	15	\N	https://upload.wikimedia.org/wikipedia/commons/0/0c/Casino_supermarket.jpg	48.6840266	6.1767714	10	grocery	{supermarche}	\N	f	\N	{}	0	0
27	Boutique Créateurs Nancy	15 Grande Rue, 54000 Nancy	2025-09-24 11:11:02.558	1	\N	https://upload.wikimedia.org/wikipedia/commons/0/0c/Clothing_Boutique.jpg	48.6951722	6.1811654	10	fashion	{accessoires,vetements}	\N	f	independant	{}	0	0
28	Zara Nancy	12 Rue Saint-Georges, 54000 Nancy	2025-09-24 11:12:00.778	1	\N	https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg	48.7076033	6.2211377	10	fashion	{homme,femme,pantalon,t-shirt,sweat}	\N	t	neuf	{}	0	0
30	Foot Locker Nancy	7 Rue Saint-Jean, 54000 Nancy	2025-09-24 11:12:00.78	1	\N	https://upload.wikimedia.org/wikipedia/commons/4/4e/Foot_Locker_logo.svg	48.690341	6.1809187	10	fashion	{chaussures,homme,femme}	\N	f	neuf	{}	0	0
31	Galeries Lafayette Nancy	3 Rue Saint-Georges, 54000 Nancy	2025-09-24 11:12:00.78	1	\N	https://upload.wikimedia.org/wikipedia/commons/4/40/Galeries_Lafayette_logo.svg	48.6909236	6.1826353	10	fashion	{homme,femme,sac,chaussures,couvre-chef,sous-vetements}	\N	f	neuf	{}	0	0
32	Friperie Vintage Nancy	8 Rue des Dominicains, 54000 Nancy	2025-09-24 11:12:00.78	1	\N	https://upload.wikimedia.org/wikipedia/commons/1/11/Clothes_shop.jpg	48.6926612	6.1828853	10	fashion	{t-shirt,pantalon,couvre-chef,homme,femme}	\N	f	friperie	{}	0	0
43	Bijouterie Julien d’Orcel Nancy	Centre commercial Saint-Sébastien, 54000 Nancy	2025-09-24 11:16:24.976	1	\N	https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200	48.6882752	6.180669	10	gifts	{bijoux}	\N	f	\N	{}	0	0
29	H&M Nancy	25 Rue Saint-Georges, 54000 Nancy	2025-09-24 11:12:00.779	1	\N	https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg	48.691235	6.1835947	10	fashion	{homme,femme,enfant,t-shirt,sweat,pantalon}	\N	f	neuf	{}	0	0
33	Fnac Nancy	2 Rue Saint-Georges, 54000 Nancy	2025-09-24 11:14:28.676	1	\N	https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200	48.6907781	6.1827379	10	tech	{pc,smartphones,audio,accessoires}	\N	t	neuf	{}	0	0
34	Micromania Nancy	Centre commercial Saint-Sébastien, 54000 Nancy	2025-09-24 11:14:28.677	1	\N	https://images.unsplash.com/photo-1587202372616-e4d7b5ebf0d7?w=1200	48.6882752	6.180669	10	tech	{consoles,jeux,accessoires}	\N	f	neuf	{}	0	0
35	Apple iConcept Nancy	16 Rue Saint-Dizier, 54000 Nancy	2025-09-24 11:14:28.677	1	\N	https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200	48.6914066	6.1818844	10	tech	{smartphones,pc,accessoires,montres}	\N	f	neuf	{}	0	0
22	Grand Frais Nancy	Rue Marcel Brot, 54000 Nancy	2025-09-24 11:07:20.111	14	\N	https://upload.wikimedia.org/wikipedia/commons/7/7b/Grand_Frais_store.jpg	48.6865238	6.2012202	10	grocery	{primeur}	\N	t	\N	{}	0	0
\.


--
-- Data for Name: tech_accessories; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.tech_accessories (id, name) FROM stdin;
\.


--
-- Data for Name: tech_categories; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.tech_categories (id, name) FROM stdin;
\.


--
-- Data for Name: user_delivery_preferences; Type: TABLE DATA; Schema: public; Owner: ethandiart
--

COPY public.user_delivery_preferences (user_id, store_id, delivery_date, delivery_slot) FROM stdin;
6	15	2025-09-26	14:00 - 15:00
6	14	2025-09-26	14:00 - 15:00
1	3	2025-09-30	09:00 - 10:00
\.


--
-- Data for Name: user_logs; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.user_logs (id, user_id, action, created_at) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: flash_user
--

COPY public.users (id, email, password_hash, firstname, lastname, street, city, postal, stripe_customer_id, refresh_token, created_at, delivery_code, vehicle, google_id, phone, twofa_enabled, twofa_method, twofa_secret, twofa_temp_code, webauthn_credentials, role, last_login, lat, lng) FROM stdin;
3	driver@test.com	$2a$06$BFYjeVDPcBtE3WaEtVUa4u5bmmWINOPjXuwj3aj68h6K.g6kTKLy.	John	Driver	\N	\N	\N	\N	\N	2025-09-24 10:48:42.097	0000	\N	\N	\N	f	\N	\N	\N	[]	driver	\N	\N	\N
4	store@test.com	$2a$06$jyyvhLctM1hCPmmvwSWdjeqprDSSxrQFOL31kXGYO9RCfJwCvK.Xa	Alice	Store	\N	\N	\N	\N	\N	2025-09-24 10:48:45.578	0000	\N	\N	\N	f	\N	\N	\N	[]	store	\N	\N	\N
5	luigi-store@test.com	$2a$06$.bSKiw0oKddw1r9N00PQu.MC9pdcIV2vyQs01Jj4EjYD9xyFtOqqu	Luigi	Pizzeria	\N	\N	\N	\N	\N	2025-09-24 10:52:11.393	0000	\N	\N	\N	f	\N	\N	\N	[]	store	\N	\N	\N
6	carrefour-city@test.com	$2a$06$G2mpIS3Vod6omUw9Z3sPuOtuj01vFt5zRGQ6xynK.UEwj.oH/ETwi	Carrefour	City	\N	\N	\N	\N	\N	2025-09-24 11:07:20.071	0000	\N	\N	\N	f	\N	\N	\N	[]	store	\N	\N	\N
7	carrefour-market@test.com	$2a$06$lHRgZoec5rKoiHGg0dIONOZtTqJy3tRSGnZL8QaE5o4bBHbgLaN0y	Carrefour	Market	\N	\N	\N	\N	\N	2025-09-24 11:07:20.077	0000	\N	\N	\N	f	\N	\N	\N	[]	store	\N	\N	\N
8	lidl-nancy@test.com	$2a$06$1yAf7ucro8n5MFA1NCaRRu5y3JxqYMx7jFMkb.lgY6Gr/HWaJPdaG	Lidl	Nancy	\N	\N	\N	\N	\N	2025-09-24 11:07:20.081	0000	\N	\N	\N	f	\N	\N	\N	[]	store	\N	\N	\N
9	monoprix-nancy@test.com	$2a$06$37Sa0jd3P8Yyr1QuTwq1lOIIMyYYyzwhplSMLC2hmDbB1K2dfrd.y	Monoprix	Nancy	\N	\N	\N	\N	\N	2025-09-24 11:07:20.085	0000	\N	\N	\N	f	\N	\N	\N	[]	store	\N	\N	\N
10	auchan-nancy@test.com	$2a$06$pf/yOfiNhsXByei8nQn19usz8Xx5qrXYg0Yjvr1zx6ivDnvgeIGzW	Auchan	Nancy	\N	\N	\N	\N	\N	2025-09-24 11:07:20.089	0000	\N	\N	\N	f	\N	\N	\N	[]	store	\N	\N	\N
11	intermarche-nancy@test.com	$2a$06$YGB.zJ2eyuxqAejnqW2Bz.GZkKJ0J7CWTlQJgyV/uEz3XmlI1H0S2	Intermarche	Nancy	\N	\N	\N	\N	\N	2025-09-24 11:07:20.093	0000	\N	\N	\N	f	\N	\N	\N	[]	store	\N	\N	\N
12	biocoop-nancy@test.com	$2a$06$mMZ5jI91SdnZA1kq5QM5GuEoxcNMFFKAFgUC79EQDJDOM0vcLejXu	Biocoop	Nancy	\N	\N	\N	\N	\N	2025-09-24 11:07:20.097	0000	\N	\N	\N	f	\N	\N	\N	[]	store	\N	\N	\N
13	naturalia-nancy@test.com	$2a$06$Cg8j.hqF3OJn4JQ1kpRgkeZKK13rXxG1shZ8b6F1cgPj20GF17fFy	Naturalia	Nancy	\N	\N	\N	\N	\N	2025-09-24 11:07:20.103	0000	\N	\N	\N	f	\N	\N	\N	[]	store	\N	\N	\N
14	grandfrais-nancy@test.com	$2a$06$Obw12ZNcJOWJg9bIP5gdc.cQPoeoMtbcNTUxMa1mTAIAiUTUgOs9y	GrandFrais	Nancy	\N	\N	\N	\N	\N	2025-09-24 11:07:20.107	0000	\N	\N	\N	f	\N	\N	\N	[]	store	\N	\N	\N
15	casino-nancy@test.com	$2a$06$T7Libox0nqOFHE34XKbTnOGsk8KB3p8ptC8EI4J7Jy7/IwYBkb6/e	Casino	Nancy	\N	\N	\N	\N	\N	2025-09-24 11:07:20.112	0000	\N	\N	\N	f	\N	\N	\N	[]	store	\N	\N	\N
1	ethan.diart09@gmail.com	google_oauth	Ethan	Diart	31 Rue des Quatre Eglises	Nancy	54000	cus_T72NLqq4QCxHp2	\N	2025-09-24 08:44:11.558	0000	\N	112665399298135755753	\N	f	\N	\N	\N	[]	admin	\N	48.68796	6.1833
\.


--
-- Name: admin_earnings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.admin_earnings_id_seq', 1, false);


--
-- Name: brands_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.brands_id_seq', 1, false);


--
-- Name: bundle_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.bundle_items_id_seq', 1, false);


--
-- Name: bundles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.bundles_id_seq', 1, false);


--
-- Name: cart_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.cart_items_id_seq', 5, true);


--
-- Name: cart_supplements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.cart_supplements_id_seq', 1, true);


--
-- Name: deliveries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.deliveries_id_seq', 1, false);


--
-- Name: driver_earnings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.driver_earnings_id_seq', 1, false);


--
-- Name: drivers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.drivers_id_seq', 1, false);


--
-- Name: favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.favorites_id_seq', 55, true);


--
-- Name: order_item_supplements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.order_item_supplements_id_seq', 6, true);


--
-- Name: order_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.order_items_id_seq', 19, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.orders_id_seq', 7, true);


--
-- Name: payment_methods_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.payment_methods_id_seq', 2, true);


--
-- Name: product_bundles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.product_bundles_id_seq', 1, false);


--
-- Name: product_images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.product_images_id_seq', 1, false);


--
-- Name: product_option_values_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.product_option_values_id_seq', 1, false);


--
-- Name: product_options_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.product_options_id_seq', 1, false);


--
-- Name: product_reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.product_reviews_id_seq', 1, false);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.products_id_seq', 31, true);


--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.refresh_tokens_id_seq', 14, true);


--
-- Name: reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.reviews_id_seq', 1, false);


--
-- Name: search_logs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.search_logs_id_seq', 1, false);


--
-- Name: store_earnings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.store_earnings_id_seq', 1, false);


--
-- Name: store_hours_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.store_hours_id_seq', 1, false);


--
-- Name: store_sections_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ethandiart
--

SELECT pg_catalog.setval('public.store_sections_id_seq', 11, true);


--
-- Name: stores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.stores_id_seq', 43, true);


--
-- Name: tech_accessories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.tech_accessories_id_seq', 1, false);


--
-- Name: tech_categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.tech_categories_id_seq', 1, false);


--
-- Name: user_logs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.user_logs_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: flash_user
--

SELECT pg_catalog.setval('public.users_id_seq', 15, true);


--
-- Name: admin_earnings admin_earnings_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.admin_earnings
    ADD CONSTRAINT admin_earnings_pkey PRIMARY KEY (id);


--
-- Name: brands brands_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY (id);


--
-- Name: bundle_items bundle_items_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.bundle_items
    ADD CONSTRAINT bundle_items_pkey PRIMARY KEY (id);


--
-- Name: bundles bundles_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.bundles
    ADD CONSTRAINT bundles_pkey PRIMARY KEY (id);


--
-- Name: cart_items cart_items_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.cart_items
    ADD CONSTRAINT cart_items_pkey PRIMARY KEY (id);


--
-- Name: cart_supplements cart_supplements_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.cart_supplements
    ADD CONSTRAINT cart_supplements_pkey PRIMARY KEY (id);


--
-- Name: deliveries deliveries_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.deliveries
    ADD CONSTRAINT deliveries_pkey PRIMARY KEY (id);


--
-- Name: driver_earnings driver_earnings_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.driver_earnings
    ADD CONSTRAINT driver_earnings_pkey PRIMARY KEY (id);


--
-- Name: drivers drivers_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.drivers
    ADD CONSTRAINT drivers_pkey PRIMARY KEY (id);


--
-- Name: favorites favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);


--
-- Name: order_item_supplements order_item_supplements_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.order_item_supplements
    ADD CONSTRAINT order_item_supplements_pkey PRIMARY KEY (id);


--
-- Name: order_items order_items_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: payment_methods payment_methods_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.payment_methods
    ADD CONSTRAINT payment_methods_pkey PRIMARY KEY (id);


--
-- Name: product_bundles product_bundles_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.product_bundles
    ADD CONSTRAINT product_bundles_pkey PRIMARY KEY (id);


--
-- Name: product_images product_images_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.product_images
    ADD CONSTRAINT product_images_pkey PRIMARY KEY (id);


--
-- Name: product_option_values product_option_values_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.product_option_values
    ADD CONSTRAINT product_option_values_pkey PRIMARY KEY (id);


--
-- Name: product_options product_options_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.product_options
    ADD CONSTRAINT product_options_pkey PRIMARY KEY (id);


--
-- Name: product_reviews product_reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.product_reviews
    ADD CONSTRAINT product_reviews_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: refresh_tokens refresh_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.refresh_tokens
    ADD CONSTRAINT refresh_tokens_pkey PRIMARY KEY (id);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- Name: search_logs search_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.search_logs
    ADD CONSTRAINT search_logs_pkey PRIMARY KEY (id);


--
-- Name: store_earnings store_earnings_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.store_earnings
    ADD CONSTRAINT store_earnings_pkey PRIMARY KEY (id);


--
-- Name: store_hours store_hours_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.store_hours
    ADD CONSTRAINT store_hours_pkey PRIMARY KEY (id);


--
-- Name: store_sections store_sections_pkey; Type: CONSTRAINT; Schema: public; Owner: ethandiart
--

ALTER TABLE ONLY public.store_sections
    ADD CONSTRAINT store_sections_pkey PRIMARY KEY (id);


--
-- Name: stores stores_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.stores
    ADD CONSTRAINT stores_pkey PRIMARY KEY (id);


--
-- Name: tech_accessories tech_accessories_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.tech_accessories
    ADD CONSTRAINT tech_accessories_pkey PRIMARY KEY (id);


--
-- Name: tech_categories tech_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.tech_categories
    ADD CONSTRAINT tech_categories_pkey PRIMARY KEY (id);


--
-- Name: user_delivery_preferences user_delivery_preferences_pkey; Type: CONSTRAINT; Schema: public; Owner: ethandiart
--

ALTER TABLE ONLY public.user_delivery_preferences
    ADD CONSTRAINT user_delivery_preferences_pkey PRIMARY KEY (user_id, store_id);


--
-- Name: user_logs user_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.user_logs
    ADD CONSTRAINT user_logs_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: brands_name_key; Type: INDEX; Schema: public; Owner: flash_user
--

CREATE UNIQUE INDEX brands_name_key ON public.brands USING btree (name);


--
-- Name: cart_supplements_cart_item_id_product_id_key; Type: INDEX; Schema: public; Owner: flash_user
--

CREATE UNIQUE INDEX cart_supplements_cart_item_id_product_id_key ON public.cart_supplements USING btree (cart_item_id, product_id);


--
-- Name: drivers_phone_key; Type: INDEX; Schema: public; Owner: flash_user
--

CREATE UNIQUE INDEX drivers_phone_key ON public.drivers USING btree (phone);


--
-- Name: favorites_user_id_store_id_key; Type: INDEX; Schema: public; Owner: flash_user
--

CREATE UNIQUE INDEX favorites_user_id_store_id_key ON public.favorites USING btree (user_id, store_id);


--
-- Name: idx_orders_user_id; Type: INDEX; Schema: public; Owner: flash_user
--

CREATE INDEX idx_orders_user_id ON public.orders USING btree (user_id);


--
-- Name: idx_store_hours_store_id; Type: INDEX; Schema: public; Owner: flash_user
--

CREATE INDEX idx_store_hours_store_id ON public.store_hours USING btree (store_id);


--
-- Name: order_item_supplements_order_item_id_product_id_key; Type: INDEX; Schema: public; Owner: flash_user
--

CREATE UNIQUE INDEX order_item_supplements_order_item_id_product_id_key ON public.order_item_supplements USING btree (order_item_id, product_id);


--
-- Name: products_store_id_name_gender_key; Type: INDEX; Schema: public; Owner: flash_user
--

CREATE UNIQUE INDEX products_store_id_name_gender_key ON public.products USING btree (store_id, name, gender);


--
-- Name: refresh_tokens_token_key; Type: INDEX; Schema: public; Owner: flash_user
--

CREATE UNIQUE INDEX refresh_tokens_token_key ON public.refresh_tokens USING btree (token);


--
-- Name: tech_accessories_name_key; Type: INDEX; Schema: public; Owner: flash_user
--

CREATE UNIQUE INDEX tech_accessories_name_key ON public.tech_accessories USING btree (name);


--
-- Name: tech_categories_name_key; Type: INDEX; Schema: public; Owner: flash_user
--

CREATE UNIQUE INDEX tech_categories_name_key ON public.tech_categories USING btree (name);


--
-- Name: unique_card_per_user; Type: INDEX; Schema: public; Owner: flash_user
--

CREATE UNIQUE INDEX unique_card_per_user ON public.payment_methods USING btree (user_id, brand, last4);


--
-- Name: users_email_key; Type: INDEX; Schema: public; Owner: flash_user
--

CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);


--
-- Name: users_google_id_key; Type: INDEX; Schema: public; Owner: flash_user
--

CREATE UNIQUE INDEX users_google_id_key ON public.users USING btree (google_id);


--
-- Name: users_phone_key; Type: INDEX; Schema: public; Owner: flash_user
--

CREATE UNIQUE INDEX users_phone_key ON public.users USING btree (phone);


--
-- Name: bundle_items bundle_items_bundle_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.bundle_items
    ADD CONSTRAINT bundle_items_bundle_id_fkey FOREIGN KEY (bundle_id) REFERENCES public.bundles(id) ON DELETE CASCADE;


--
-- Name: bundle_items bundle_items_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.bundle_items
    ADD CONSTRAINT bundle_items_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.products(id) ON DELETE CASCADE;


--
-- Name: cart_items cart_items_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.cart_items
    ADD CONSTRAINT cart_items_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: cart_items cart_items_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.cart_items
    ADD CONSTRAINT cart_items_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: cart_supplements cart_supplements_cart_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.cart_supplements
    ADD CONSTRAINT cart_supplements_cart_item_id_fkey FOREIGN KEY (cart_item_id) REFERENCES public.cart_items(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: cart_supplements cart_supplements_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.cart_supplements
    ADD CONSTRAINT cart_supplements_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: deliveries deliveries_driver_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.deliveries
    ADD CONSTRAINT deliveries_driver_id_fkey FOREIGN KEY (driver_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: deliveries deliveries_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.deliveries
    ADD CONSTRAINT deliveries_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id) ON DELETE CASCADE;


--
-- Name: favorites favorites_store_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(id) ON DELETE CASCADE;


--
-- Name: favorites favorites_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: products fk_section; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT fk_section FOREIGN KEY (section_id) REFERENCES public.store_sections(id) ON DELETE SET NULL;


--
-- Name: order_item_supplements order_item_supplements_order_item_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.order_item_supplements
    ADD CONSTRAINT order_item_supplements_order_item_id_fkey FOREIGN KEY (order_item_id) REFERENCES public.order_items(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: order_item_supplements order_item_supplements_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.order_item_supplements
    ADD CONSTRAINT order_item_supplements_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: order_items order_items_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: order_items order_items_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: orders orders_store_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: orders orders_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: payment_methods payment_methods_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.payment_methods
    ADD CONSTRAINT payment_methods_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: product_bundles product_bundles_bundle_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.product_bundles
    ADD CONSTRAINT product_bundles_bundle_id_fkey FOREIGN KEY (bundle_id) REFERENCES public.bundles(id) ON DELETE CASCADE;


--
-- Name: product_bundles product_bundles_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.product_bundles
    ADD CONSTRAINT product_bundles_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON DELETE CASCADE;


--
-- Name: product_images product_images_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.product_images
    ADD CONSTRAINT product_images_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON DELETE CASCADE;


--
-- Name: product_option_values product_option_values_option_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.product_option_values
    ADD CONSTRAINT product_option_values_option_id_fkey FOREIGN KEY (option_id) REFERENCES public.product_options(id) ON DELETE CASCADE;


--
-- Name: product_options product_options_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.product_options
    ADD CONSTRAINT product_options_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON DELETE CASCADE;


--
-- Name: product_reviews product_reviews_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.product_reviews
    ADD CONSTRAINT product_reviews_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON DELETE CASCADE;


--
-- Name: product_reviews product_reviews_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.product_reviews
    ADD CONSTRAINT product_reviews_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE SET NULL;


--
-- Name: products products_accessory_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_accessory_id_fkey FOREIGN KEY (accessory_id) REFERENCES public.tech_accessories(id);


--
-- Name: products products_brand_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_brand_id_fkey FOREIGN KEY (brand_id) REFERENCES public.brands(id);


--
-- Name: products products_section_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_section_id_fkey FOREIGN KEY (section_id) REFERENCES public.store_sections(id) ON DELETE SET NULL;


--
-- Name: products products_store_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: products products_tech_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_tech_category_id_fkey FOREIGN KEY (tech_category_id) REFERENCES public.tech_categories(id);


--
-- Name: refresh_tokens refresh_tokens_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.refresh_tokens
    ADD CONSTRAINT refresh_tokens_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: reviews reviews_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id);


--
-- Name: reviews reviews_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- Name: reviews reviews_store_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(id);


--
-- Name: reviews reviews_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: search_logs search_logs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.search_logs
    ADD CONSTRAINT search_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE SET NULL;


--
-- Name: store_earnings store_earnings_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.store_earnings
    ADD CONSTRAINT store_earnings_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: store_earnings store_earnings_store_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.store_earnings
    ADD CONSTRAINT store_earnings_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: store_hours store_hours_store_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.store_hours
    ADD CONSTRAINT store_hours_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(id) ON DELETE CASCADE;


--
-- Name: store_sections store_sections_store_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ethandiart
--

ALTER TABLE ONLY public.store_sections
    ADD CONSTRAINT store_sections_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(id) ON DELETE CASCADE;


--
-- Name: stores stores_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.stores
    ADD CONSTRAINT stores_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: user_delivery_preferences user_delivery_preferences_store_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ethandiart
--

ALTER TABLE ONLY public.user_delivery_preferences
    ADD CONSTRAINT user_delivery_preferences_store_id_fkey FOREIGN KEY (store_id) REFERENCES public.stores(id);


--
-- Name: user_delivery_preferences user_delivery_preferences_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ethandiart
--

ALTER TABLE ONLY public.user_delivery_preferences
    ADD CONSTRAINT user_delivery_preferences_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: user_logs user_logs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: flash_user
--

ALTER TABLE ONLY public.user_logs
    ADD CONSTRAINT user_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: ethandiart
--

GRANT USAGE ON SCHEMA public TO flash_user;


--
-- Name: TABLE store_sections; Type: ACL; Schema: public; Owner: ethandiart
--

GRANT ALL ON TABLE public.store_sections TO flash_user;


--
-- Name: SEQUENCE store_sections_id_seq; Type: ACL; Schema: public; Owner: ethandiart
--

GRANT SELECT ON SEQUENCE public.store_sections_id_seq TO flash_user;


--
-- Name: TABLE user_delivery_preferences; Type: ACL; Schema: public; Owner: ethandiart
--

GRANT ALL ON TABLE public.user_delivery_preferences TO flash_user;


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: ethandiart
--

ALTER DEFAULT PRIVILEGES FOR ROLE ethandiart IN SCHEMA public GRANT SELECT ON SEQUENCES  TO flash_user;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: ethandiart
--

ALTER DEFAULT PRIVILEGES FOR ROLE ethandiart IN SCHEMA public GRANT ALL ON TABLES  TO flash_user;


--
-- PostgreSQL database dump complete
--

\unrestrict TUW8dlr1QCmxjT0b8tO9Xs7i7RYDELBUcKCGd3UpwIiB6c4zW3BQ8AI5Nk4dmxd

