import React, { useRef } from 'react';
import { View, SafeAreaView, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { Typography } from '../../components/Typography/Typography';
import { Header } from '../../components/Header/Header';
import { colors } from '../../utils/colors';
import { styles } from './Historia.styles';

export const HistoriaScreen = () => {
  const navigation = useNavigation<any>();
  const scrollY = useRef(useSharedValue(0)).current;

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header
        withAnimation
        onPress={() => navigation.goBack()}
        title='Devocional'
        scrollY={scrollY}
      />
      <Animated.ScrollView scrollEventThrottle={16} onScroll={onScroll}>
        <View style={styles.container}>
          {/* <Image
            resizeMode='cover'
            source={image ? { uri: image } : EverLogo}
            style={styles.image}
          /> */}
          <View style={styles.innerContainer}>
            <Typography style={styles.devotionalTitle} variant='H2' color={colors.dark}>
              Historia
            </Typography>
            <Typography style={styles.subtitle} variant='H3' color={colors.grey7}>
              Iglesia Cristiana Espíritu y Verdad surgió en el corazón de Dios y de la unión de
              tres ministerios que atendieron el llamado de Dios de predicar el evangelio y de
              discipular a toda criatura. El primero de dichos ministerios fue la casa de
              oración de hermana Loly de Martínez, que en ese tiempo tenía más de 18 años de
              existencia, dicha casa de oración siempre se caracterizó por ser un lugar donde
              el Espíritu Santo se manifestaba en cada reunión por medios de los dones de
              profecía, sanidad y milagros. El segundo ministerio fue el grupo de oración de
              nuestros hermanos Will y Betty de Hernández, quienes se reunían todos los jueves
              por la noche, predicando la palabra de Dios con un fuerte énfasis doctrinal. El
              tercer ministerio era el grupo de discipulado de hombres y mujeres que los
              Pastores Pedro y Rebeca impartían, este grupo se caracterizaba por el énfasis en
              hacer realidad la palabra de Dios en la vida de las personas, en este grupo de
              parejas había una gran unión y hermandad y esto le permitió ser base ministerial
              con la que iglesia Cristiana Espíritu y Verdad inició. Los Pastores Pedro y
              Rebeca recibieron de parte de Dios el llamado de iniciar una iglesia, y fue así
              como el día 12 de junio en la terraza del patio de una casa se realizó nuestro
              primer culto, al cual asistieron 36 personas, Dios permitió que esa primera
              semilla creciera y se multiplicará. Tres meses después se alquiló el local, en el
              que hoy está ubicada la iglesia, llegando a reunir luego de tres meses un grupo
              de 60 personas. A los nueve meses de vida de la iglesia comenzó su primera
              ampliación la cual fue finalizada para celebrar su primer aniversario. Para su
              segundo aniversario la iglesia fue remodelada una vez más. A fines de su segundo
              año de vida la iglesia inauguro su segundo culto dominical, actualmente la
              iglesia tiene dos servicios el día domingo y 5 servicios el resto de la semana.
              La visión que Dios dio a los pastores y líderes fundadores de la iglesia, fue el
              de una iglesia en la que se manifestará la presencia y el poder del Espíritu
              Santo, además que fuese una iglesia en que la Verdad de la Palabra de Dios fuera
              predicada y enseñada, una iglesia de adoradores en Espíritu y en Verdad, de ahí
              surge el nombre de Iglesia Cristiana Espíritu y Verdad o Iglesia EVER que es la
              contracción de su nombre. Por tanto la iglesia busca tener la Plenitud del
              Espíritu Santo, la Verdad de la Palabra la cual es Cristo, y la presencia del
              Padre que busca adoradores en Espíritu y en Verdad.
            </Typography>
          </View>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};
