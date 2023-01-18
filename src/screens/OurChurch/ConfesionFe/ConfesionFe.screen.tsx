import React, { useState } from 'react';
import { TouchableOpacity, SafeAreaView, Dimensions, FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  useSharedValue,
  interpolate,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { Header } from '../../../components/Header/Header';
import { Typography } from '../../../components/Typography/Typography';
import { colors } from '../../../utils/colors';
import { styles } from './ConfesionFe.styles';

const { height } = Dimensions.get('screen');
const faithConfessions = [
  {
    id: 1,
    title: 'Las Escrituras',
    content:
      'Creemos que la biblia es nuestra base de autoridad doctrinal. Creemos que «toda la Escritura es inspirada por Dios», por lo cual entendemos que toda la Biblia es inspirada en el sentido de que los santos hombres de Dios » siendo inspirados por el Espíritu Santo» escribieron las palabras de la Escritura. Creemos que esta inspiración divina se extiende igual y completamente a todas las partes de los escritos históricos, poéticos, doctrinales y proféticos, tal cual como aparecieron en los manuscritos originales. Creemos que toda la Biblia en los textos originales no tiene error. Creemos que todas las Escrituras se centra en el Señor Jesucristo, en Su persona y obra tanto en su primera y segunda venida, y por lo tanto, que ninguna parte, incluso en el Antiguo Testamento, se interpreta correctamente, hasta que se pone a Jesucristo como el centro de toda la verdad. También creemos que todas las Escrituras fueron inspiradas para nuestra instrucción práctica (2ª Timoteo 3:16-17).',
  },
  {
    id: 2,
    title: 'La trinidad.',
    content:
      'Creemos que la Divinidad existe eternamente en tres personas: el Padre, el Hijo, y el Espíritu Santo – y que estos tres son un solo Dios, que tiene precisamente la misma naturaleza, atributos y perfecciones, tres personas en una sola naturaleza divina. (Mateo 28:18-19; Marcos 12:29; Juan 1:1; Hechos 5:3-4; 2 Corintios 13:14).',
  },
  {
    id: 3,
    title: 'Ángeles caídos y no caídos.',
    content:
      'Creemos que Dios creó una compañía innumerable de seres espirituales, sin pecado, conocidos como ángeles. Que uno, “Lucero, hijo de la mañana, el más alto en rango” – peco a través del orgullo, convirtiéndose en Satanás, y que, una gran multitud de los ángeles lo siguió en su caída moral, algunos de los cuales se convirtieron en demonios y son activos como sus agentes y asociados en la persecución de sus fines profanos, mientras que otros que cayeron son “reservados en prisiones eternas, bajo tinieblas para el juicio del gran día” (Isaías 14:12-17; Ezequiel 28:11-19; 1 Timoteo 3:6; 2 Pedro 2:4; Judas 6). Creemos que Satanás es quien origino del pecado, y que, bajo el permiso de Dios, por medio de la sutileza, condujo a nuestros primeros padres hacia la transgresión, cumpliéndose así su caída moral y lo cual los convirtió en esclavos del pecado y de Satanás, tanto a Adán y a Eva, como a sus descendientes. Creemos que Satanás es el enemigo de Dios y del pueblo de Dios, y que se exalta a sí mismo por encima de todo lo que se llama Dios o es objeto de culto; él es el que en un principio dijo: “Yo seré semejante al Altísimo” en su guerra aparece como un ángel de luz, incluso falsifica las obras de Dios mediante el fomento de los movimientos y los sistemas religiosos que se caracterizan por una negación de la eficacia de la sangre de Cristo y de la salvación sólo por gracia (Génesis. 3:1-19; Romanos 5:12-14; 2 Corintios 4:3-4, 11:13-15; Efesios 6:10-12; 2 Tesalonicenses 2:4; 1 Timoteo 4:1-3). Creemos que Satanás fue juzgado en la Cruz , aunque todavía no ha sido ejecutado , y que él es un usurpador y ahora gobierna como el “dios de este mundo”, por lo cual, en la segunda venida de Cristo, Satanás será atado y echado en el abismo durante mil años, y después de los mil años será desatado por un poco de tiempo y luego “arrojado al lago de fuego y azufre”, donde “será atormentado día y noche por todos los siglos” (Col. 2:15; Apocalipsis 20:1-3, 10). Creemos que una gran compañía de ángeles guardaron su santo estado y están delante del trono de Dios, de donde son enviados como espíritus ministradores a favor de los que serán herederos de la salvación (Lucas 15:10; Efesios 1:21; Hebreos 1:14; Apocalipsis 7: 11-12). Creemos que el hombre fue hecho menor que los ángeles, y que, en Su encarnación, Cristo se humillo hasta la muerte, para poder levantar a los creyente a su propia esfera por encima de los ángeles (Hebreos 2:6-10).',
  },
  {
    id: 4,
    title: 'El hombres, creado y caído.',
    content:
      'Creemos que el hombre fue creado originalmente a la imagen y semejanza de Dios, y que cayó a causa del pecado, y como consecuencia de su pecado, perdió la vida espiritual, convirtiéndose en un ser muerto en sus delitos y pecados, y que se convirtió en siervo del poder del diablo. También creemos que esta muerte espiritual, se ha transmitido a toda la raza humana, únicamente Jesucristo hombre fue libre de esa condenación desde su concepción virginal. Por lo tanto cualquier descendiente de Adán nace en el mundo con una naturaleza que no posee ninguna luz de la vida divina , sino que es esencial e inmutablemente mala, aparte de la gracia divina (Génesis 1:2-6, 2:17, 6:5; Salmos 14:1-3, 51:5; Jeremías 17:9; Juan 3:6, 5:40, 6:35-36; Romanos 3:10-19, 8:6-7; Efesios 2:1-3; 1 Timoteo 5:6; 1 Juan 3:8).',
  },
  {
    id: 5,
    title: 'Las dispensaciones.',
    content:
      'Creemos que las dispensaciones son mayordomías por las que Dios administra su propósito en la tierra a través del hombre en diversas responsabilidades. Creemos que tres de estas dispensaciones o reglas de la vida son el tema de la revelación ampliada en las Escrituras, es decir, la dispensación de la ley mosaica, la dispensación de la gracia, y la futura dispensación del reino milenario. Creemos que estas son distintas y no deben ser mezcladas o confundidas, ya que son cronológicamente sucesivas (Efesios 1:10,3:9).',
  },
  {
    id: 6,
    title: 'El primer advenimiento.',
    content:
      'Creemos que según Dios lo propuso y tal como fue previamente anunciado en las profecías de las Escrituras, el eterno Hijo de Dios vino a este mundo para manifestar a Dios a los hombres, cumplir las profecías, y llegar a ser el Redentor de un mundo perdido. Con este fin nació de una virgen, y recibió un cuerpo humano y una naturaleza humana sin pecado (Lucas 1:30-35; Juan 1:18, 3:16; Hebreos 4:15). Creemos que en su lado humano, Él se convirtió y sigue siendo un hombre perfecto, pero sin pecado en toda su vida, y sin embargo Él conservó su deidad absoluta, siendo al mismo tiempo verdadero Dios y verdadero hombre, y que su vida terrenal funcionaba a veces dentro de la esfera de lo que era un ser humano y, a veces dentro de la esfera de lo que era divina (Lucas 2:40; Juan 1:1-2; Filipenses 2:5-8). Creemos que en el cumplimiento de las profecías Cristo se manifestó primero a Israel como su Rey y Mesías, y que al ser rechazado por esa nación, según los consejos eternos de Dios, dio su vida en rescate por todos (Juan 1:11; Hechos 2:22-24; 1 Tim 2:6). Creemos que en el infinito amor por los perdidos, Jesucristo aceptó voluntariamente la voluntad de su Padre y se convirtió en el Cordero sacrificial divinamente provisto y quitó el pecado del mundo, llevando Él los santos juicios contra el pecado que la justicia de Dios debe imponer. Su muerte fue, por tanto, vicaria en el más absoluto sentido, el justo por los injustos, y por su muerte se convirtió en el Salvador de los perdidos (Juan 1:29; Romanos 3:25-26; 2 Corintios 5:14; Hebreos 10:5-14; 1 Pedro 3:18). Creemos que, de acuerdo con las Escrituras, Él se levantó de entre los muertos en el mismo cuerpo, aunque glorificado, en el que había vivido y muerto, y que su cuerpo resucitado es el modelo que en última instancia se le dará a todos los creyentes (Juan 20:20; Filipenses 3:20-21). Creemos que Cristo al dejar la tierra y subir al cielo, fue aceptado por su Padre y que dicha aceptación es la prueba final para nosotros que su obra redentora ha sido perfectamente consumada (Hebreos 1:3). Creemos que Él es la cabeza sobre todas las cosas y sobre la iglesia que es su cuerpo, y es su ministerio constante interceder y defender a los salvos (Efesios 1:22-23; Hebreos 7:25; 1 Juan 2: 1).',
  },
  {
    id: 7,
    title: 'La salvación solo por Cristo.',
    content:
      'Creemos que, debido a la muerte universal por medio del pecado, nadie puede entrar en el reino de Dios si no nace de nuevo, y que no hay ninguna obra que el hombre pueda hacer para ser salvo. Creemos, también, que nuestra redención se ha realizado únicamente por la sangre de nuestro Señor Jesucristo, que se hizo pecado y fue hecho maldición por nosotros, muriendo en nuestro lugar (Lev. 17:11; Isaías 64:6; Mateo 26:28; Juan 3:7-18; Romanos 5:6-9; 2 Corintios 5:21; Gálatas 3:13, 6:15; Efesios 1:7; Filipenses 3:4-9; Tito 3:5; Santiago 1:18; 1 Pedro 1:18-19, 23). Creemos que el nuevo nacimiento del creyente viene sólo por la fe en Cristo y que el arrepentimiento es una parte vital de creer, el hombre es salvo por creer en Jesucristo como su Dios y como su Salvador personal, mas nada menos nada, y al creer en Jesucristo llegamos a ser salvos e hijos de Dios (Juan 1:12, 3:16-18, 36, 5:24, 6:29; Hechos 13:39, 16:31; Romanos 1:16-17, 3:22, 26, 4:5; 10:4; Gal 3:22)',
  },
  {
    id: 8,
    title: 'El alcance de la salvación.',
    content:
      'Creemos que cuando una persona no regenerada deposita su fe en Cristo, pasa inmediatamente de un estado de muerte espiritual a un nuevo estado de vida espiritual y de la vieja creación a la nueva creación; siendo justificada de todas las cosas, aceptados ante el Padre de la misma forma en que Cristo es aceptado como Hijo, amado como se ama a Cristo, que tiene su lugar y porción como vinculados a Él y uno con Él para siempre. (Juan 5:24, 17:23; Hechos 13:39; Romanos 5:1; 1 Corintios 3:21-23; Efesios 1:3; Colosenses 2:10; 1 Juan 4:17; 5:11-12).',
  },
  {
    id: 9,
    title: 'Santificación.',
    content:
      'Creemos que el significado de la santificación es apartarse y consagrarse para para Dios, dicha santificación es triple: 1) Ya está completa para cada persona salva porque su posición para con Dios es lo mismo que la posición de Cristo. Dado que el creyente está en Cristo, es apartado para Dios en la medida en la que Cristo es apartado para Dios. 2) Creemos, sin embargo, que conserva su naturaleza de pecado, que no puede ser erradicada en esta vida. Por lo tanto, mientras que la situación de los cristianos en Cristo es perfecta, su estado actual no es más perfecto que lo que su experiencia en la vida diaria es. Existe, por tanto, una santificación progresiva en la que el cristiano debe “crecer en la gracia”, y para “cambiar” por el poder sin trabas del Espíritu. 3) Creemos también que el hijo de Dios todavía será santificado plenamente al final de los tiempos. (Juan 17:17; 2 Corintios 3:18, 7:1; Efesios 4:24; 5:25-27; 1 Tesalonicenses 5:23; Hebreos 10:10, 14; 12:10).',
  },
  {
    id: 10,
    title: ' Ordenanzas.',
    content:
      'Creemos que el bautismo en agua y la Cena del Señor son las únicas ordenanzas escriturales, y que son un medio, para la iglesia de dar testimonio en esta era (Mateo 28:19; Lucas 22:19-20; Hechos 10: 47-48; 16:32-33; 18:7-8; 1 Corintios 11:26). Creemos que el bautismo en agua no salva, sino más bien es un testimonio de que la salvación ya ocurrió al creer en Jesucristo como Salvador. Dicho bautismo tipifica el hecho espiritual de que hemos muerto con Cristo y hemos resucitado con Él. Bautizamos en el nombre de El Padre, de El Hijo y de El Espíritu Santo. Creemos que los elementos de la santa cena son simplemente símbolos del cuerpo y la sangre de Cristo, por lo que no deben ser adorados. Esto no exime del hecho que deben ser tomados con dignidad, habiendo confesado cualquier pecado conocido y discerniendo el cuerpo de Cristo lo cual tiene dos facetas: 1) Se debe discernir el hecho que Cristo si entrego su cuerpo y si derramo su sangre para salvarnos. 2) Se debe discernir el hecho de que como iglesia somos un cuerpo en Cristo y debemos estar en paz y en armonía los unos con los otros hasta donde nos sea posible.',
  },
  {
    id: 11,
    title: 'El caminar cristiano.',
    content:
      'Creemos que hemos sido llamados con un llamamiento santo, no debemos andar conforme a la carne, sino según el Espíritu, y viviendo en el poder del Espíritu que mora en nosotros, somos capacitados para no satisfacer los deseos de la carne. Pero la carne con su naturaleza caída de Adán, que en esta vida nunca se erradica , estará con nosotros hasta el fin de nuestra peregrinación terrena, por lo cual necesita ser mantenida por el Espíritu constantemente en sujeción a Cristo, o seguramente se manifestará su presencia en nuestras vidas acarreando la deshonra de nuestro Señor (Romanos 6:11-13 ; 8:2, 4 , 12-13 ; . Gal 5:16-23; Efesios 4:22-24; Col. 2:1-10; 1 Pedro 1:14-16, 1 Juan 1:4-7; 3:5-9).',
  },
  {
    id: 12,
    title: 'Servicio cristiano. ',
    content:
      'Creemos que El Espíritu Santo otorga dones para el servicio a todos los que son salvos. Si bien existe una diversidad de dones, cada creyente es energizado por el mismo Espíritu, y cada uno está llamado a su propio servicio divinamente designado como el Espíritu puede querer. Creemos también que a lo largo de la historia de la iglesia ciertas personas han sido especialmente llamadas por Dios para ser apóstoles, profetas, evangelistas, pastores y maestros, y que esto es y ha sido para el cumplimiento de su voluntad y para su gloria eterna, que éstos deberán ser sostenidos y alentados en su servicio a Dios (Romanos 12:6; 1 Corintios 12:4-11; Efesios 4:11). Creemos que, en su totalidad, aparte de los beneficios de la salvación que se otorgan por igual a todos los que creen, Dios promete recompensas de acuerdo a la fidelidad de cada creyente en su servicio a su Señor , y que estos premios serán otorgados en el tribunal de Cristo (1 Corintios 3:9-15, 9:18-27; 2 Corintios 5:10).',
  },
  {
    id: 13,
    title: 'La gran comisión.',
    content:
      'Creemos que es el mensaje explícito de nuestro Señor Jesucristo a aquellos a quienes Él ha salvado, es que sean enviados por Él al mundo, como Él fue un enviado de Su Padre al mundo. Creemos que , después de ser salvos, los cristianos deben considerarse como a extranjeros y peregrinos en este mundo, embajadores y testigos, y que su objetivo principal en la vida debe ser, dar conocer a Cristo a toda persona, llevando las buenas nuevas del evangelio( Mateo 28: 18-19; Marcos 16:15; Juan 17:18; Hechos 1:08; 2 Corintios 5:18-20; 1 Pedro 1:17; 2:11).',
  },
  {
    id: 14,
    title: 'La esperanza bendita.',
    content:
      'Creemos que, de acuerdo con la Palabra de Dios, el próximo gran evento en el cumplimiento de la profecía será la venida del Señor en el aire para encontrarse con su iglesia en el cielo (El Arrebatamiento), tanto a los suyos que hayamos quedado, como todos los que durmieron en Jesús, serán arrebatados (Juan 14:1-3; 1 Corintios 15:51-52; Filipenses 3:20; 1 Tesalonicenses 4:13-18, Tito 2:11-14).',
  },
  {
    id: 15,
    title: 'La tribulación.',
    content:
      'Creemos que el arrebatamiento de la iglesia será seguido por el cumplimiento de la septuagésima semana de Daniel (Daniel 9:27; Apocalipsis 6:1-19:21) durante el cual la iglesia, el cuerpo de Cristo, estará en el cielo. Todo el período de la semana setenta de Daniel será un tiempo de juicio sobre toda la tierra, al final de los cuales los tiempos de los gentiles serán llevados a su fin. La segunda mitad de este período será el tiempo de angustia para Jacob (Jeremías. 30:7), que nuestro Señor llama la gran tribulación (Mateo 24:15-21). Creemos que la justicia universal no se realizará antes de la segunda venida de Cristo, sino que el mundo día a día se corromperá y que la edad presente va a terminar con una apostasía terrible.',
  },
  {
    id: 16,
    title: 'La segunda venida de Cristo.',
    content:
      'Creemos que el período de la gran tribulación en la tierra será culminado con el regreso físico del Señor Jesucristo a la tierra acompañado por sus santos en las nubes del cielo, y con poder y gran gloria para introducir la edad milenaria y poder así: 1) Atar a Satanás, quien será colocado en el abismo. 2) Levantar la maldición que recae ahora sobre toda la creación. 3) Restaurar a Israel a su propia tierra y que le sean dadas las promesas del pacto de Dios. 4) Y llevar a todo el mundo al conocimiento de Dios. (Deuteronomio. 30:1-10; Isaías 11:9; Ezequiel 37:21-28; Mateo 24:15,25:46; Hechos 15:16-17; Romanos 8:19-23, 11: 25-27; 1 Tim 4:1-3; 2 Tim 3:1-5; Apocalipsis 20:1-3).',
  },
  {
    id: 17,
    title: 'El estado eterno.',
    content:
      'Creemos que al morir, los espíritus y las almas de aquellos que han confiado en el Señor Jesucristo para la salvación pasan inmediatamente a Su presencia y allí permanecen en bienaventuranza consciente hasta la resurrección de los cuerpos glorificados cuando Cristo venga por los suyos, con lo cual el alma y el cuerpo reunidos se relacionarán con Él para siempre en la gloria. Por el contrario los espíritus y las almas de los incrédulos permanecerán, después de la muerte, conscientes de su condena y miseria hasta el juicio del gran trono blanco en el final del milenio, y cuando el alma y cuerpo de los réprobos sean reunidos serán lanzado al lago de fuego , no para ser aniquilados , sino para ser castigados eternamente lejos de la presencia del Señor y de la gloria de su poder (Lucas 16:19-26, 23:42M; 2 Corintios 5:8; Filipenses 1:23; 2 Tesalonicenses 1:7-9; Judas 6-7; Apocalipsis 20:11-15 ).',
  },
];

export const ConfesionFeScreen = () => {
  const navigation = useNavigation();
  const [currentItemId, setCurrentItemId] = useState(0);
  const [open, setOpen] = useState(false);
  const [elementPressed, setElementPressed] = useState(0);
  const [prevElementPressed, setPrevElementPressed] = useState(1);
  // const prevElementPressed = useRef(0);
  const sizeFirstElement = useSharedValue(0);

  const growElement = useAnimatedStyle(() => ({
    height: interpolate(sizeFirstElement.value, [0, 1], [70, height / 0.5]),
  }));

  const shrinkElement = useAnimatedStyle(() => ({
    height: interpolate(sizeFirstElement.value, [1, 0], [height / 0.5, 70]),
  }));

  const getOpacity = useAnimatedStyle(() => ({
    opacity: interpolate(sizeFirstElement.value, [1, 0], [1, 0]),
  }));

  const getAnimation = (id) => {
    console.log('-> id', id);
    console.log('-> currentItemId', currentItemId);
    if (currentItemId === id) {
      if (open) {
        return growElement;
      } else {
        return shrinkElement;
      }
    } else if (currentItemId !== id && !open) {
      console.log('entra?');
      return shrinkElement;
    }
  };

  const openTab = (id) => {
    setElementPressed((prevId) => {
      // console.log('-> prevId', prevId)
      // console.log('-> id', id)
      // console.log('-> open', open)
      setPrevElementPressed(prevId);
      return id;
    });
    const found = faithConfessions.find((item) => item.id === id);
    setCurrentItemId(found.id);
    setOpen(!open);
    sizeFirstElement.value = withTiming(found.id === id && !open ? 1 : 0, {
      duration: 400,
      easing: Easing.sin,
    });
  };
  console.log('==> elementPressed', elementPressed);
  console.log('==> open', open);
  console.log('==> prevElementPressed', prevElementPressed);

  // useEffect(() => {
  //   prevElementPressed.current = elementPressed;
  // }, [elementPressed]);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header
        withAnimation={false}
        onPress={() => navigation.goBack()}
        title='Confesión de fé'
      />
      <FlatList
        data={faithConfessions}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => openTab(item.id)} activeOpacity={0.8}>
            {/* {console.log('===> currentItemId', currentItemId)}
            {console.log('===> item.id', item.id)}
            {console.log('===> open', open)} */}
            <Animated.View style={[styles.box, getAnimation(item.id)]}>
              <View style={currentItemId === item.id && open ? {} : getOpacity}>
                {currentItemId === item.id && open ? (
                  <Typography variant='H3' color={colors.grey11}>
                    {item.content}
                  </Typography>
                ) : (
                  <Typography variant='H1' color={colors.grey9} bold>
                    {item.title}
                  </Typography>
                )}
              </View>
            </Animated.View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};
