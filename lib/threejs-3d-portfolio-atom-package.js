'use babel';

import Threejs3dPortfolioView from './threejs-3d-portfolio-view';
import { CompositeDisposable } from 'atom';

export default {

  threejs3dPortfolioView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.threejs3dPortfolioView = new Threejs3dPortfolioView(state.threejs3dPortfolioViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.threejs3dPortfolioView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'threejs-3d-portfolio:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.threejs3dPortfolioView.destroy();
  },

  serialize() {
    return {
      threejs3dPortfolioViewState: this.threejs3dPortfolioView.serialize()
    };
  },

  toggle() {
    console.log('Threejs3dPortfolio was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
