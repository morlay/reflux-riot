# riot-reflux

all method as [reflux](https://github.com/reflux/refluxjs), but for now only let `Reflux.listenTo` work

# usages in riot

``` js

import riot from 'riot'
import reflux from 'reflux'
import Store from './path/to/Store'

riot.tag(
  'some-component',
  '<div></div>',
  function(){
      this.mixin(reflux.listenTo(Store, 'onStoreUpdate'));
      this.onStoreUpdate = ()=>{
        this.update()
      }
  });

```
