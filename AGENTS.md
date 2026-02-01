# Homeschool Client - Agent Guidelines

## Development Commands

### Core Commands
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint on all files

### Testing Commands
This project currently has no test framework configured. When adding tests:
- Install Jest/Vitest for unit tests
- Use `npm test` for running all tests
- Use `npm test -- --testNamePattern="specific test"` for single test
- Use `npm test -- --watch` for watch mode

### Code Quality
- `npx tsc --noEmit` - TypeScript type checking
- `npx eslint . --ext .ts,.tsx` - ESLint check
- `npx prettier --check .` - Prettier formatting check

## Project Architecture

### Framework & Libraries
- **Next.js 16.1.6** with App Router
- **React 19.2.3** with TypeScript
- **Tailwind CSS 4** for styling
- **Better Auth** for authentication
- **TanStack Query** for data fetching
- **React Hook Form** with Zod validation
- **Radix UI** for component primitives
- **Lucide React** for icons

### File Structure
```
src/
├── app/                    # Next.js App Router pages
├── components/
│   └── ui/                # Reusable UI components (Radix-based)
├── features/              # Feature-specific components
├── lib/                   # Utilities and configurations
└── types/                 # TypeScript type definitions
```

## Code Style Guidelines

### Import Organization
1. External libraries first (React, Next.js, third-party)
2. Internal modules (use @/ alias for src/)
3. Relative imports last
4. Group similar imports together

```typescript
// External libraries
import * as React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// Internal modules
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Relative imports
import { AuthGate } from "./AuthGate"
```

### Component Conventions
- Use PascalCase for component names
- Export components as named exports
- Use TypeScript interfaces for props
- Include default prop values in function signatures

```typescript
interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "default" | "destructive" | "outline"
  size?: "default" | "sm" | "lg"
  asChild?: boolean
}

export function Button({ 
  className, 
  variant = "default", 
  size = "default", 
  asChild = false, 
  ...props 
}: ButtonProps) {
  // Component implementation
}
```

### Styling Guidelines
- Use Tailwind CSS classes exclusively
- Leverage `cn()` utility for conditional classes
- Follow Radix UI styling patterns
- Use class-variance-authority (cva) for component variants

```typescript
import { cn } from "@/lib/utils"

function Component({ className, isActive }: ComponentProps) {
  return (
    <div className={cn(
      "bg-white rounded-md p-4 shadow-sm",
      "hover:shadow-md transition-shadow",
      isActive && "border-2 border-primary",
      className
    )}>
      {/* Content */}
    </div>
  )
}
```

### TypeScript Guidelines
- Strict mode enabled
- Use type imports for types: `import type { Metadata } from "next"`
- Prefer interfaces over types for object shapes
- Use generic types where appropriate
- Enable path aliases (@/ for src/)

```typescript
// Type imports
import type { Metadata } from "next"

// Generic types
interface ApiResponse<T> {
  data: T
  status: number
}

// Path aliases
import { Button } from "@/components/ui/button"
```

### Error Handling
- Use try-catch blocks for async operations
- Implement proper error boundaries
- Log errors appropriately
- Show user-friendly error messages

```typescript
try {
  const data = await fetchData()
  return data
} catch (error) {
  console.error("Failed to fetch data:", error)
  // Show error to user
  return null
}
```

### Naming Conventions
- **Components**: PascalCase (Button, UserProfile)
- **Functions/Variables**: camelCase (getUserData, isLoading)
- **Constants**: UPPER_SNAKE_CASE (API_BASE_URL, MAX_RETRY)
- **Files**: kebab-case for utilities (auth-utils.ts), PascalCase for components (Button.tsx)
- **Types/Interfaces**: PascalCase with descriptive names (UserProps, ApiResponse)

### State Management
- Use React hooks for local state
- Use TanStack Query for server state
- Avoid prop drilling, use context when needed
- Keep state as close to the component as possible

```typescript
// Local state
const [isOpen, setIsOpen] = useState(false)

// Server state
const { data, isLoading, error } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers
})
```

### API Routes
- Use Next.js API routes in app/api/
- Implement proper HTTP methods
- Use Better Auth for authentication
- Return consistent response formats

```typescript
// app/api/users/route.ts
export async function GET() {
  try {
    const users = await getAuthenticatedUser()
    return Response.json({ users }, { status: 200 })
  } catch (error) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }
}
```

### Authentication
- Use Better Auth for all auth needs
- Implement AuthGate component for route protection
- Store tokens securely
- Handle auth state changes globally

## Development Workflow

1. Create feature branches from develop
2. Run linting and type checking before commits
3. Test functionality manually
4. Create pull requests to develop branch
5. Deploy from develop to production

## Performance Guidelines

- Use React.memo for expensive components
- Implement proper loading states
- Optimize images and assets
- Use dynamic imports for large components
- Implement proper caching strategies

## Security Guidelines

- Never commit secrets or API keys
- Validate all user inputs
- Use HTTPS in production
- Implement proper authentication and authorization
- Sanitize data from external sources

## Testing Strategy

When implementing tests:
- Unit test utility functions
- Integration test components
- Test API routes
- Mock external dependencies
- Use descriptive test names

## Git Workflow

- Use conventional commit messages
- Create feature branches from develop
- Squash commits before merging
- Delete merged branches
- Keep main branch stable

## Common Patterns

### Loading States
```typescript
const { data, isLoading, error } = useQuery({
  queryKey: ['data'],
  queryFn: fetchData
})

if (isLoading) return <LoadingSpinner />
if (error) return <ErrorMessage error={error} />
return <Component data={data} />
```

### Form Handling
```typescript
const { register, handleSubmit, formState } = useForm({
  resolver: zodResolver(schema)
})

const onSubmit = async (data: FormData) => {
  try {
    await submitData(data)
  } catch (error) {
    // Handle error
  }
}
```

### Modal/Dialogs
```typescript
const [isOpen, setIsOpen] = useState(false)

return (
  <>
    <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* Dialog content */}
    </Dialog>
  </>
)
```

## Component Library Usage

### Radix UI Components
- Always use Radix UI primitives
- Extend with proper styling
- Follow accessibility guidelines
- Use proper ARIA attributes

### UI Component Patterns
- Use cva for variant management
- Implement proper TypeScript props
- Follow consistent styling patterns
- Include proper accessibility features

## Environment Configuration

- Use .env.local for local development
- Configure environment variables properly
- Never commit .env files
- Use proper variable naming conventions

## Deployment

- Build with `npm run build`
- Test in staging environment
- Monitor performance
- Handle rollbacks properly

This document should be updated as the project evolves and new patterns emerge.