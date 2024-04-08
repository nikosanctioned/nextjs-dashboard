import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import InvoiceStatus from '@/app/ui/invoices/status';
import LikeButton from '@/app/ui/like-button';
import VipImage from '@/app/ui/personalui/vipimage';
export const revalidate = 1;

export default async function Page() {
  const customers = await fetchFilteredCustomers('');

  return (
    <>
      <InvoiceStatus status="second page" />
      <CustomersTable customers={customers} />
    </>
  );
}
