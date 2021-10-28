import React, { memo, useCallback } from "react";
import { useRefreshActivity } from "../helper/ActivityContext";
import { createActivity } from "../services/appService";
import AddIcon from "./AddIcon";
import Button from "./Button";
import toast from "react-hot-toast";

const TambahButton = ({ onClick }) => (
  <Button
    data-cy="activity-add-button"
    onClick={onClick}
    startIcon={<AddIcon />}
    style={{ backgroundColor: "#16abf8" }}
  >
    Tambah
  </Button>
);

function AddActivity() {
  const { refreshActivity } = useRefreshActivity();
  // const [isLoading, setIsLoading] = useState(false);

  const refresh = useCallback(() => {
    refreshActivity();
  }, [refreshActivity]);

  const onSubmit = async () => {
    try {
      await createActivity("New Activity");
      refresh();
    } catch (error) {
      console.log(error);
      toast.error("Activity gagal ditambahkan");
    }
  };

  return (
    <div>
      <TambahButton onClick={onSubmit} />
    </div>
  );
}

export default memo(AddActivity);
