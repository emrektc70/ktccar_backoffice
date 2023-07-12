import View from "./View";
import { useCallback, useEffect, useMemo, useState } from "react";

type Props = {
  getGroupes: () => void;
  groupes: any[];
  postGroupeId: (id: number) => void;
};

const ViewModel: React.FC<Props> = ({ getGroupes, groupes, postGroupeId }) => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getGroupes();
  }, [getGroupes]);

  const filteredGroupes = useMemo(() => {
    let sortedGroupes = [...groupes];

    sortedGroupes.sort((a, b) => {
      if (a.isPrivate && !b.isPrivate) {
        return 1;
      } else if (!a.isPrivate && b.isPrivate) {
        return -1;
      } else {
        return 0;
      }
    });

    if (searchValue.trim() === "") {
      return sortedGroupes;
    } else {
      const searchRegex = new RegExp(searchValue, "i");
      const filteredBySearch = sortedGroupes.filter((groupe) =>
        groupe.groupName && groupe.groupName.match(searchRegex)
      );
      return filteredBySearch;
    }
  }, [groupes, searchValue]);

  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }, []);

  return (
    <View
      groupes={groupes}
      handleSearchChange={handleSearchChange}
      filteredGroupes={filteredGroupes}
      searchValue={searchValue}
    />
  );
};

export default ViewModel;
