import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import UploadAvatar from "@/components/forms/UploadAvatar";
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
      <UploadAvatar
        uid={user?.id ?? null}
        size={150}
        // onUpload={(url) => {
        //   setAvatarUrl(url);
        //   updateProfile({ fullname, username, website, avatar_url: url });
        // }}
      />
    </div>
  );
};
export default Dashboard;
