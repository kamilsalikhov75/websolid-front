declare module '*.png' {
  const value: any;
  export = value;
}
declare module '*.jpg' {
  const value: any;
  export = value;
}
type ReactTagProps<T> = import('react').ComponentPropsWithRef<T>;

interface Route {
  label: React.ReactNode;
  href: string;
}
