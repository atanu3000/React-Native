import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function PersonalInfo() {
  function openSocialApp(appUrl: string, webUrl: string) {
    Linking.canOpenURL(appUrl)
      .then(supported => {
        supported ? Linking.openURL(appUrl) : Linking.openURL(webUrl);
      })
      .catch(error => console.error(error));
  }

  const phoneNumber = 7044417695;
  const message = 'Hi there';

  return (
    <View>
      <Text style={styles.headingText}>Personal Info</Text>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/354231529_969310760999059_7407002566052698534_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=8KkGSWYIwV0AX_wuWg2&_nc_ht=scontent.fccu5-1.fna&cb_e2o_trans=t&oh=00_AfC0Zt4uoBnox9YUT5rrByB4dRcExCm8ogX3Ecdn9BDLQA&oe=6587453C',
          }}
          style={styles.profileImage}
        />
        <View style={styles.profileLinks}>
          <TouchableOpacity
            onPress={() =>
              openSocialApp(
                'fb://page/atanu.paul.792740',
                'https://www.facebook.com/atanu.paul.792740',
              )
            }>
            <Image
              source={{
                uri: 'https://img.icons8.com/fluency/48/facebook-new.png',
              }}
              style={styles.linksStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openSocialApp(
                `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
                  message,
                )}`,
                `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message,
                )}`,
              )
            }>
            <Image
              source={{
                uri: 'https://img.icons8.com/color/48/whatsapp--v1.png',
              }}
              style={styles.linksStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openSocialApp(
                'linkedin://in/atanu-paul-b1212b219/',
                'https://www.linkedin.com/in/atanu-paul-b1212b219/',
              )
            }>
            <Image
              source={{
                uri: 'https://img.icons8.com/color/48/linkedin.png',
              }}
              style={styles.linksStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openSocialApp('mailto:atanu.paul123456789@gmail.com', 'mailto:atanupaul2411@gmail.com')}>
            <Image
              source={{
                uri: 'https://img.icons8.com/color/48/gmail-new.png',
              }}
              style={styles.linksStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom: 10,
    marginTop: 15,
  },
  container: {
    marginVertical: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
  },
  profileLinks: {
    flex: 1,
    flexDirection: 'row',
    gap: 25,
    alignItems: 'center',
    marginVertical: 40,
  },
  linksStyle: {
    height: 40,
    width: 40,
  },
});
