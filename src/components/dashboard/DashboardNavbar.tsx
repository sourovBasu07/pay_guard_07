"use client";

import { Button } from "@/components/ui/button";
import { useSignoutMutation } from "@/lib/apiSlices/usersSlice";

const DashboardNavbar = () => {
  const [signout, { isLoading }] = useSignoutMutation();

  return (
    <div className="">
      <Button onClick={signout}>Log out</Button>
    </div>
  );
};
export default DashboardNavbar;
