import { rootReducer } from "../reducer";
import { initialState } from "../store";
import * as actions from "../actions";

describe("Reducers", () => {
  it("A ação de abrir o modal de edição (OPEN_EDIT_MODAL) deve alterar o estado corretamente. (editModalisOpen: true)", () => {
    const state = rootReducer(initialState, { type: actions.OPEN_EDIT_MODAL });
    expect(state.modals).toEqual(
      expect.objectContaining({ editModalisOpen: true })
    );
  });

  it("A ação de fechar o modal de edição (CLOSE_EDIT_MODAL) deve alterar o estado corretamente. (editModalisOpen: false)", () => {
    const state = rootReducer(initialState, { type: actions.CLOSE_EDIT_MODAL });
    expect(state.modals).toEqual(
      expect.objectContaining({ editModalisOpen: false })
    );
  });

  it("A ação de abrir o modal de adicionar delivery (OPEN_ADD_MODAL) deve alterar o estado corretamente. (addModalisOpen: true)", () => {
    const state = rootReducer(initialState, { type: actions.OPEN_ADD_MODAL });
    expect(state.modals).toEqual(
      expect.objectContaining({ addModalisOpen: true })
    );
  });

  it("A ação de fechar o modal de adicionar delivery (OPEN_CLOSE_MODAL) deve alterar o estado corretamente. (addModalisOpen: false)", () => {
    const state = rootReducer(initialState, { type: actions.OPEN_CLOSE_MODAL });
    expect(state.modals).toEqual(
      expect.objectContaining({ addModalisOpen: false })
    );
  });
});
