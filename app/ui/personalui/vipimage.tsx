import Image from 'next/image';
import eldenRing from '@/public/elden_ring.jpeg';
export default async function VipImage() {
  return (
    <div className="flex items-center justify-center">
      {'Stooooop'}
      <Image src={eldenRing} width={200} height={200} alt="VIP badge" />
    </div>
  );
}
