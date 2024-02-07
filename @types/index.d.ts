type ReactTagProps<T> = import('react').ComponentPropsWithRef<T>;

interface Route {
  label: React.ReactNode;
  href: string;
}
