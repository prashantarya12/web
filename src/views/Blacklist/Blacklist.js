import React from 'react';
import { api } from "../../utils";
import ListPage from "../../components/ListPage";

export default props => (
  <ListPage
    title="Blacklist (Exact)"
    add={api.addBlacklist}
    remove={api.removeBlacklist}
    refresh={api.getBlacklist}
    {...props}/>
);