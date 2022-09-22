'use babel';

import Threejs3dPortfolioAtomPackage1View from './threejs-3d-portfolio-atom-package1-view';
import { CompositeDisposable } from 'atom';

export default {

  threejs3dPortfolioAtomPackage1View: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.threejs3dPortfolioAtomPackage1View = new Threejs3dPortfolioAtomPackage1View(state.threejs3dPortfolioAtomPackage1ViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.threejs3dPortfolioAtomPackage1View.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'threejs-3d-portfolio-atom-package1:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.threejs3dPortfolioAtomPackage1View.destroy();
  },

  serialize() {
    return {
      threejs3dPortfolioAtomPackage1ViewState: this.threejs3dPortfolioAtomPackage1View.serialize()
    };
  },

  toggle() {
    console.log('Threejs3dPortfolioAtomPackage1 was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
