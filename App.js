import React from 'react';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListItem from './app/components/lists/ListItem'

import MessagesScreen from './app/screens/MessagesScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import Screen from './app/components/Screen';

export default function App() {
  return (
    <Screen>
      <ListItem 
      image={require("./app/assets/headshot.jpg")}
      title="Arsalon A."
      subTitle="8 listings
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis, orci vitae ultrices mattis, sapien nisl tempus metus, ac vestibulum justo velit eu ipsum. Vivamus vel lacus vitae tortor ornare venenatis. Phasellus aliquam ex blandit, placerat massa quis, aliquam magna. Cras dui nulla, tincidunt quis pulvinar in, iaculis non arcu. Integer non est leo. Praesent metus dui, convallis non elementum aliquam, ornare quis velit. Nulla facilisi. Aliquam in aliquet purus. Nunc viverra vestibulum facilisis. Donec eget molestie sapien, ut scelerisque felis. Suspendisse potenti. Fusce in tristique tortor.

Donec congue vehicula lacus, vel porttitor purus tempor id. Morbi rutrum eu sapien eget luctus. Aenean ultrices condimentum mauris non venenatis. Quisque a nisl eget odio egestas tempor ac in mi. Pellentesque suscipit molestie varius. Aenean ipsum risus, efficitur in tortor suscipit, venenatis bibendum eros. Donec mattis dictum leo sed vestibulum. Vivamus pulvinar eget dolor vel eleifend. Nullam tincidunt, augue non rhoncus pellentesque, justo sapien dignissim arcu, in pretium est urna id mauris. Donec convallis ipsum ligula, et feugiat augue cursus non. Proin convallis enim erat, sed sagittis sapien pulvinar ac. In hac habitasse platea dictumst. Curabitur faucibus dolor et eros pellentesque, quis porttitor diam accumsan. Sed luctus felis vitae mauris auctor, sit amet iaculis augue sodales. Suspendisse lacus ex, tincidunt id imperdiet vel, pretium non leo. In turpis risus, rutrum in est a, semper ornare sem.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non venenatis justo. Aliquam dignissim purus porttitor, feugiat orci sit amet, lacinia quam. Vestibulum mattis vel massa et sagittis. Proin vitae magna tempus ex commodo imperdiet at at velit. Fusce viverra lectus non mauris rutrum lacinia. Cras iaculis in dolor ut dapibus. Fusce condimentum rutrum dui et feugiat. In et massa eu nulla luctus sollicitudin id ut purus. Mauris mattis odio et rhoncus imperdiet. Ut bibendum ipsum nisl, a porttitor nunc rutrum non. Pellentesque et mauris ac eros rutrum ullamcorper.

Integer vitae viverra augue, non suscipit purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam dui sapien, pulvinar ut lectus et, pharetra interdum orci. Maecenas venenatis fermentum leo vel vulputate. Nunc ut elit risus. Donec sed congue tellus, sed finibus risus. Quisque vitae eros nec dolor dignissim tristique vitae vitae nibh. Suspendisse potenti. Aenean lobortis vulputate bibendum.

Curabitur vel ullamcorper nisi, vitae vehicula enim. Sed interdum tincidunt viverra. Morbi venenatis, ante eget rutrum convallis, odio lacus tincidunt leo, id accumsan nunc felis vel erat. Suspendisse in ultrices erat. Nulla mattis vel neque at elementum. Sed iaculis luctus felis, quis euismod tellus blandit eget. In hac habitasse platea dictumst. Duis pulvinar erat sed tempus venenatis. Nam finibus vulputate erat, non efficitur ligula elementum in. Nulla facilisi.
      
      "
    />
    </Screen>

  )
}

