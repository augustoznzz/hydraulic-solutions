# Caça Vazamentos - Landing Page Application

## Overview

This is a professional landing page application for "Caça Vazamentos," a Brazilian leak detection service company. The application is built as a full-stack TypeScript project with a React frontend and Express backend, featuring a modern design system and professional service presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with a custom design system
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for bundling the server code

### Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

## Key Components

### Frontend Components
- **Layout Components**: Header with navigation, Hero section, Footer
- **Content Sections**: Professional profile, Services showcase, Contact section
- **UI System**: Complete shadcn/ui component library implementation
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Backend Components
- **Server Setup**: Express server with middleware for logging and error handling
- **Route Structure**: Modular route registration system (currently minimal)
- **Storage Layer**: Interface-based storage with MemStorage implementation
- **Development Tools**: Vite integration for HMR during development

### Data Models
- **User Schema**: Basic user entity with username and password fields
- **Validation**: Zod schemas for runtime type validation
- **Type Safety**: Full TypeScript integration with Drizzle ORM

## Data Flow

### Frontend Data Flow
1. React components use TanStack React Query for server state
2. API requests handled through custom query client with error handling
3. Form submissions and user interactions trigger appropriate API calls
4. Toast notifications provide user feedback

### Backend Data Flow
1. Express middleware handles request logging and parsing
2. Routes delegate to storage interface for data operations
3. Error handling middleware provides consistent error responses
4. Response formatting includes request timing and JSON logging

### Database Flow
1. Drizzle ORM provides type-safe database operations
2. Schema definitions in shared directory for type consistency
3. Migration system for database schema evolution
4. Environment-based database URL configuration

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Framework**: Radix UI primitives, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js, Drizzle ORM, Neon Database serverless driver
- **Development**: Vite, TypeScript, tsx, esbuild
- **Validation**: Zod for schema validation and type inference

### Development Tools
- **Type Checking**: TypeScript with strict configuration
- **Code Formatting**: Tailwind CSS with PostCSS and Autoprefixer
- **Path Aliases**: Configured for clean imports across client, server, and shared code

### Third-Party Integrations
- **Database**: Neon Database (serverless PostgreSQL)
- **UI Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation
- **Form Handling**: React Hook Form with Hookform resolvers

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle Kit handles schema migrations
4. **Static Assets**: Client assets served from dist/public directory

### Environment Configuration
- **Development**: tsx runs server with Vite middleware for HMR
- **Production**: Node.js serves bundled application with static file serving
- **Database**: Environment variable configuration for database URL
- **Build Optimization**: esbuild with external packages for smaller bundle size

### Server Configuration
- **Static Serving**: Production server serves built React application
- **API Routes**: Express routes prefixed with `/api`
- **Error Handling**: Centralized error middleware with status code handling
- **Logging**: Request/response logging with timing information

### Development Features
- **Hot Module Replacement**: Vite HMR for fast development iteration
- **TypeScript Checking**: Real-time type checking during development
- **Path Resolution**: Alias configuration for clean import statements
- **Development Banner**: Replit development environment integration