import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import InvoiceStatus from '@/app/ui/invoices/status';

export default async function Page() {
  const customers = await fetchFilteredCustomers('');

  return (
    <>
      <InvoiceStatus status="first page" />
      <CustomersTable customers={customers} />
    </>
  );
}
