import View from "./View";
import { useCallback, useEffect, useMemo, useState } from "react";

type Props = {
  getGroupes: () => void;
  groupes: any[];
  postGroupeId: (id: number) => void;
};

const ViewModel: React.FC<Props> = ({ getGroupes, groupes, postGroupeId }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setOpen] = useState<boolean>(false)
  const [sortByMembers, setSortByMembers] = useState(false);
  const [sortByAlphabet, setSortByAlphabet] = useState(false);

  useEffect(() => {
    getGroupes();
  }, [getGroupes]);

  /*   const filteredGroupes = useMemo(() => {
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
    }, [groupes, searchValue]); */

  const filteredGroupes = useMemo(() => {
    let sortedGroupes = [...groupes];

    sortedGroupes.sort((a, b) => {
      if (sortByMembers) {
        if (a.isPrivate === false) {
          return b.nbUser - a.nbUser;
        }
      }

      if (sortByAlphabet) {
        if (a.isPrivate === false) {
          return a.groupName.localeCompare(b.groupName);
        }
      }
      return 0;
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
  }, [groupes, searchValue, sortByMembers, sortByAlphabet]);


  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }, []);


  const handleClickPopup = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen])


  const handleClickNumberFilter = useCallback(() => {
    setSortByMembers(!sortByMembers)
    if (sortByAlphabet === true) {
      setSortByAlphabet(false)
    }
  }, [sortByAlphabet, sortByMembers])

  const handleClickAlphabetFilter = useCallback(() => {
    setSortByAlphabet(!sortByAlphabet);
    if (sortByMembers === true) {
      setSortByMembers(false)
    }
  }, [sortByAlphabet, sortByMembers])


  return (
    <View
      groupes={groupes}
      handleSearchChange={handleSearchChange}
      filteredGroupes={filteredGroupes}
      searchValue={searchValue}
      isOpen={isOpen}
      handleClickPopup={handleClickPopup}
      sortByMembers={sortByMembers}
      sortByAlphabet={sortByAlphabet}
      setSortByMembers={setSortByMembers}
      setSortByAlphabet={setSortByAlphabet}
      handleClickNumberFilter={handleClickNumberFilter}
      handleClickAlphabetFilter={handleClickAlphabetFilter}
    />
  );
};

export default ViewModel;
