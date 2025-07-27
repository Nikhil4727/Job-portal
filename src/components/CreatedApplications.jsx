import { getApplications } from '@/api/apiApplications';
import useFetch from '@/hooks/use-fetch';
import { useUser } from '@clerk/clerk-react';
import React, { useEffect } from 'react';
import { BarLoader } from 'react-spinners';
import ApplicationCard from './application-card';

const CreatedApplications = () => {
  const { user } = useUser();

  const {
    loading: loadingApplications,
    data: applications,
    fn: fnApplications,
  } = useFetch(getApplications, {
    user_id: user?.id,
  });

  // Only fetch once when user.id becomes available
  useEffect(() => {
    if (user?.id) {
      fnApplications();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  // Show loader only when user is not ready or still fetching
  if (!user || loadingApplications) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div className="flex flex-col gap-2">
      {applications?.length > 0 ? (
        applications.map((application) => (
          <ApplicationCard
            key={application.id}
            application={application}
            isCandidate
          />
        ))
      ) : (
        <p className="text-gray-500 text-center">No application found.</p>
      )}
    </div>
  );
};

export default CreatedApplications;
