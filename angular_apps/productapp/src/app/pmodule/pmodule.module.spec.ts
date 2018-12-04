import { PmoduleModule } from './pmodule.module';

describe('PmoduleModule', () => {
  let pmoduleModule: PmoduleModule;

  beforeEach(() => {
    pmoduleModule = new PmoduleModule();
  });

  it('should create an instance', () => {
    expect(pmoduleModule).toBeTruthy();
  });
});
