import { redirect } from 'next/navigation';

const page = () => {
  return redirect("/", 'replace')
};

export default page;