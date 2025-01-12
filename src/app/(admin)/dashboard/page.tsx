import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import { createClient } from "@/utils/supabase/server";

const Dashboard = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user);

  return (
    <div className="">
      <DashboardNavbar />
    </div>
  );
};
export default Dashboard;
