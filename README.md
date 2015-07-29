# riot-reflux

all method as [reflux](https://github.com/reflux/refluxjs), but for now only let `Reflux.listenTo` work

# usages in riot

`npm i riot-reflux -S`

``` js

import riot from 'riot'
import reflux from 'riot-reflux'
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
