import { IngredientByIdPipe } from './ingredient-by-id.pipe';

describe('IngredientByIdPipe', () => {
  it('create an instance', () => {
    const pipe = new IngredientByIdPipe();
    expect(pipe).toBeTruthy();
  });
});
