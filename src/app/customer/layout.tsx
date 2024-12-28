import CustomerHeader from "@/components/customer/header";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <nav>
        <CustomerHeader></CustomerHeader>
      </nav>

      {children}
    </section>
  );
}
