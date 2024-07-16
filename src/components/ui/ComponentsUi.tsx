import type { ComponentChildren, JSX } from 'preact';

// Card Component
export const Card = ({ children, className = '' }: { children: ComponentChildren; className?: string }) => (
  <div className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children }: { children: ComponentChildren }) => (
  <div className="px-6 py-4 border-b border-gray-700">{children}</div>
);

export const CardContent = ({ children }: { children: ComponentChildren }) => (
  <div className="p-6">{children}</div>
);

export const CardTitle = ({ children }: { children: ComponentChildren }) => (
  <h2 className="text-2xl font-bold text-white">{children}</h2>
);

// Button Component
export const Button = ({ 
  children, 
  className = '', 
  variant = 'default', 
  ...props 
}: JSX.HTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'ghost' }) => (
  <button 
    className={`px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
      ${variant === 'default' ? 'bg-teal-500 text-white hover:bg-teal-600' : 'text-gray-300 hover:bg-gray-700'}
      ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Input Component
export const Input = ({ className = '', ...props }: JSX.HTMLAttributes<HTMLInputElement>) => (
  <input 
    className={`bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 ${className}`}
    {...props}
  />
);

// Table Components
export const Table = ({ children }: { children: ComponentChildren }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-left">{children}</table>
  </div>
);

export const TableHeader = ({ children }: { children: ComponentChildren }) => (
  <thead className="bg-gray-700">{children}</thead>
);

export const TableBody = ({ children }: { children: ComponentChildren }) => (
  <tbody>{children}</tbody>
);

export const TableRow = ({ children }: { children: ComponentChildren }) => (
  <tr className="border-b border-gray-600">{children}</tr>
);

export const TableHead = ({ children }: { children: ComponentChildren }) => (
  <th className="px-4 py-2 font-medium text-gray-300">{children}</th>
);

export const TableCell = ({ children, className = '' }: { children: ComponentChildren; className?: string }) => (
  <td className={`px-4 py-2 ${className}`}>{children}</td>
);