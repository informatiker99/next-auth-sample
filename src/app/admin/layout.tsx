import AdminHeader from "@/components/admin/header";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <nav>
        <AdminHeader></AdminHeader>
      </nav>

      {children}
    </section>
  );
}
