import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import FancyCard from './FancyCard';

export default function TrandingPlaces() {
  return (
    <View>
      <Text style={styles.headingText}>Tranding Places</Text>
      <ScrollView horizontal={true}>
        <FancyCard
          imgSrc="https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Hawa-Mahal_1400.jpg"
          title="Hawa Mahal"
          label="Pink city, Jaipur"
          desp="The Hawa mahal is the place in the city in Jaipur, India. Build from pink and red sandstone, it is on the edge of the city palace."
          footer="12 mins away, "
        />
        <FancyCard
          imgSrc="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTR3DUl9a51qyJM3wdZV8mohul8DEEghdecgtnhA2Vhxz5eTXfYiXxObCz9ca9OhwwWyIXyT67dhqKLg6rR-bf4aBgJ4e5UccHsfeHEAQ"
          title="Manali"
          label="Manali, Himachal Pradesh"
          desp="Manali is a popular tourist destination in India and serves as the gateway to the Lahaul and Spiti district."
          footer="5 mins away"
        />
        <FancyCard
          imgSrc="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS0xUM4I1wPcX3nEi5J0uegD8JCFPdpEpZBRcyAdC93hJq0RfMw46vgMBbDfytUMBd1EkDjykXhdWXkxT4SsymDOk_3qkr-KLXeQqjs0w"
          title="Shimla"
          label="Shimal, Himachal Pradesh"
          desp="Shimla is the capital and the largest city of Himachal Pradesh. In 1864, Shimla was declared as the summer capital of British"
          footer="25 min away"
        />
        <FancyCard
          imgSrc="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTag8J2yciYw9w7PsO42HsIXQg8iOxx9OGe2tguLudOJawq-in5EkT-OQo7CJSCfLNZh8BiultOT6mUujHdUhJcskqRPP3FEzRoPnDaBA"
          title="Agra"
          label="Agra, Uttar Pradesh"
          desp="Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh. Agra is best known for the Taj Mahal."
          footer="20 min away"
        />
        <FancyCard
          imgSrc="https://www.newsclick.in/sites/default/files/styles/responsive_885/public/2021-11/Badar-Bashir-JK-tourism-edited.jpg?itok=ewRGEiB"
          title="Kashmir"
          label="Kasmir, Jammu and Kashmir"
          desp="Kashmir is the northernmost geographical region of the Indian subcontinent.It's a popular tourist destination for its natural beauty."
          footer="50 min away"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop: 15,
  },
});
