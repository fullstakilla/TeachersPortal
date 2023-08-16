import { createStore } from "vuex";
import { BalanceModule } from "@/store/BalanceModule";
import { ProfileItems } from '@/store/ProfileItems';
import {InputCreate} from '@/store/InputCreate';
import {EntryMore} from '@/store/EntryMore';

export default createStore({
  modules: {
    balanceObject: BalanceModule,
    changeProfile: ProfileItems,
    createInput: InputCreate,
    entryMore: EntryMore,
  },
})