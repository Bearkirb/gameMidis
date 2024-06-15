var songSideBoss = {variance: 0.02,smooth: false, bpm: 171, echo: [0.1,1.2], notes: [[1.024,-26,0.512,0.2755905511811024],[1.024,-14,0.512,0.3700787401574803],[1.536,-21,1.536,0.31496062992125984],[1.536,-9,1.536,0.4094488188976378],[2.048,-2,0.512,0.4015748031496063],[2.56,-6,0.512,0.33858267716535434],[2.56,3,0.512,0.4094488188976378],[3.072,-6,1.024,0.33858267716535434],[3.072,-2,1.024,0.33858267716535434],[3.072,3,1.024,0.41732283464566927],[3.072,5,1.024,0.44881889763779526],[3.584,-26,0.512,0.29133858267716534],[3.584,-14,0.512,0.3858267716535433],[4.096,-21,1.536,0.33070866141732286],[4.096,-9,1.536,0.4251968503937008],[4.6080000000000005,-2,0.512,0.4251968503937008],[5.12,3,0.512,0.36220472440944884],[5.12,6,0.512,0.4409448818897638],[5.632,-2,1.024,0.3937007874015748],[5.632,3,1.024,0.3937007874015748],[5.632,5,1.024,0.47244094488188976],[5.632,8,1.024,0.47244094488188976],[6.144,-21,0.512,0.31496062992125984],[6.144,-9,0.512,0.4094488188976378],[6.656000000000001,-18,1.536,0.3543307086614173],[6.656000000000001,-6,1.536,0.44881889763779526],[7.168,3,0.512,0.4645669291338583],[7.68,-2,0.512,0.3858267716535433],[7.68,10,0.512,0.4645669291338583],[8.192,-1,1.024,0.44881889763779526],[8.192,3,1.024,0.44881889763779526],[8.192,11,1.024,0.5433070866141733],[8.704,-18,0.512,0.33070866141732286],[8.704,-6,0.512,0.4251968503937008],[9.216000000000001,-13,4.096,0.3779527559055118],[9.216000000000001,-1,4.096,0.47244094488188976],[9.728,3,0.512,0.4881889763779528],[10.24,-2,0.512,0.4015748031496063],[10.24,10,0.512,0.49606299212598426],[10.752,-3,0.512,0.4094488188976378],[10.752,3,0.512,0.4094488188976378],[10.752,9,0.512,0.49606299212598426],[11.264,3,0.512,0.44881889763779526],[11.264,15,0.512,0.5354330708661418],[11.776,3,0.512,0.4566929133858268],[11.776,15,0.512,0.5433070866141733],[12.288,3,0.512,0.5118110236220472],[12.8,-4,0.512,0.41732283464566927],[12.8,8,0.512,0.5118110236220472],[13.312000000000001,-5,1.024,0.41732283464566927],[13.312000000000001,3,1.024,0.41732283464566927],[13.312000000000001,7,1.024,0.5039370078740157],[13.312000000000001,-13,0.512,0.3543307086614173],[13.312000000000001,-1,0.512,0.44881889763779526],[13.824,-13,0.512,0.36220472440944884],[13.824,-1,0.512,0.4566929133858268],[14.336,-13,2.048,0.36220472440944884],[14.336,-1,2.048,0.4566929133858268],[14.848,3,0.512,0.4645669291338583],[15.36,-6,0.512,0.3543307086614173],[15.36,6,0.512,0.44881889763779526],[15.872,-7,1.024,0.36220472440944884],[15.872,2,1.024,0.36220472440944884],[15.872,5,1.024,0.4330708661417323],[16.384,-26,0.512,0.3779527559055118],[16.384,-14,0.512,0.47244094488188976],[16.896,-21,1.536,0.31496062992125984],[16.896,-9,1.536,0.4094488188976378],[17.408,-2,0.512,0.4015748031496063],[17.92,-6,0.512,0.33858267716535434],[17.92,3,0.512,0.4094488188976378],[18.432000000000002,-6,1.024,0.33858267716535434],[18.432000000000002,-2,1.024,0.33858267716535434],[18.432000000000002,3,1.024,0.41732283464566927],[18.432000000000002,5,1.024,0.44881889763779526],[18.944,-26,0.512,0.29133858267716534],[18.944,-14,0.512,0.3858267716535433],[19.456,-21,1.536,0.33070866141732286],[19.456,-9,1.536,0.4251968503937008],[19.968,-2,0.512,0.4251968503937008],[20.48,3,0.512,0.36220472440944884],[20.48,6,0.512,0.4409448818897638],[20.992,-2,1.024,0.3937007874015748],[20.992,3,1.024,0.3937007874015748],[20.992,5,1.024,0.47244094488188976],[20.992,8,1.024,0.47244094488188976],[21.504,-21,0.512,0.31496062992125984],[21.504,-9,0.512,0.4094488188976378],[22.016000000000002,-18,1.536,0.3543307086614173],[22.016000000000002,-6,1.536,0.44881889763779526],[22.528,3,0.512,0.4645669291338583],[23.04,-2,0.512,0.3858267716535433],[23.04,10,0.512,0.4645669291338583],[23.552,-1,1.024,0.44881889763779526],[23.552,3,1.024,0.44881889763779526],[23.552,11,1.024,0.5433070866141733],[24.064,-18,0.512,0.33070866141732286],[24.064,-6,0.512,0.4251968503937008],[24.576,-13,4.096,0.3779527559055118],[24.576,-1,4.096,0.47244094488188976],[25.088,3,0.512,0.4881889763779528],[25.6,-2,0.512,0.4015748031496063],[25.6,10,0.512,0.49606299212598426],[26.112000000000002,-3,0.512,0.4094488188976378],[26.112000000000002,3,0.512,0.4094488188976378],[26.112000000000002,9,0.512,0.49606299212598426],[26.624000000000002,3,0.512,0.44881889763779526],[26.624000000000002,15,0.512,0.5354330708661418],[27.136,3,0.512,0.4566929133858268],[27.136,15,0.512,0.5433070866141733],[27.648,3,0.512,0.5118110236220472],[28.16,-4,0.512,0.41732283464566927],[28.16,8,0.512,0.5118110236220472],[28.672,-5,1.024,0.41732283464566927],[28.672,3,1.024,0.41732283464566927],[28.672,7,1.024,0.5039370078740157],[28.672,-13,0.512,0.3543307086614173],[28.672,-1,0.512,0.44881889763779526],[29.184,-13,0.512,0.36220472440944884],[29.184,-1,0.512,0.4566929133858268],[29.696,-13,2.048,0.36220472440944884],[29.696,-1,2.048,0.4566929133858268],[30.208000000000002,3,0.512,0.4645669291338583],[30.72,-6,0.512,0.3543307086614173],[30.72,6,0.512,0.44881889763779526],[31.232,-7,1.024,0.36220472440944884],[31.232,2,1.024,0.36220472440944884],[31.232,5,1.024,0.4330708661417323],[31.744,-26,0.512,0.3779527559055118],[31.744,-14,0.512,0.47244094488188976],[32.256,-16,1.536,0.2992125984251969],[32.256,-4,1.536,0.3937007874015748],[32.768,-2,0.512,0.4330708661417323],[33.28,2,0.512,0.4330708661417323],[33.28,10,0.512,0.47244094488188976],[33.792,-1,1.024,0.4409448818897638],[33.792,2,1.024,0.4409448818897638],[33.792,11,1.024,0.48031496062992124],[34.304,-16,0.512,0.33070866141732286],[34.304,-4,0.512,0.4251968503937008],[34.816,-18,1.536,0.33858267716535434],[34.816,-6,1.536,0.4330708661417323],[35.328,-1,0.512,0.4645669291338583],[35.84,3,0.512,0.47244094488188976],[35.84,11,0.512,0.5118110236220472],[36.352000000000004,2,1.024,0.47244094488188976],[36.352000000000004,8,1.024,0.47244094488188976],[36.352000000000004,10,1.024,0.47244094488188976],[36.352000000000004,14,1.024,0.5118110236220472],[36.864000000000004,-19,0.512,0.3858267716535433],[36.864000000000004,-7,0.512,0.48031496062992124],[37.376,-21,1.536,0.4015748031496063],[37.376,-9,1.536,0.49606299212598426],[37.888,3,0.512,0.49606299212598426],[38.4,3,0.512,0.5039370078740157],[38.4,8,0.512,0.5039370078740157],[38.4,11,0.512,0.5039370078740157],[38.4,15,0.512,0.5433070866141733],[38.912,6,1.024,0.5118110236220472],[38.912,11,1.024,0.5118110236220472],[38.912,15,1.024,0.5118110236220472],[38.912,18,1.024,0.5826771653543307],[39.424,-9,0.512,0.44881889763779526],[39.424,3,0.512,0.5433070866141733],[39.936,-11,1.536,0.4251968503937008],[39.936,1,1.536,0.5196850393700787],[40.448,3,0.512,0.5118110236220472],[40.96,7,0.512,0.5118110236220472],[40.96,15,0.512,0.5511811023622047],[41.472,4,1.024,0.5196850393700787],[41.472,7,1.024,0.5196850393700787],[41.472,16,1.024,0.5590551181102362],[41.984,-11,0.512,0.4645669291338583],[41.984,1,0.512,0.5590551181102362],[42.496,-13,1.536,0.48031496062992124],[42.496,-1,1.536,0.5748031496062992],[43.008,4,0.512,0.5354330708661418],[43.52,8,0.512,0.5433070866141733],[43.52,16,0.512,0.5826771653543307],[44.032000000000004,7,1.024,0.5511811023622047],[44.032000000000004,13,1.024,0.5511811023622047],[44.032000000000004,15,1.024,0.5511811023622047],[44.032000000000004,19,1.024,0.5905511811023622],[44.544000000000004,-14,0.512,0.5275590551181102],[44.544000000000004,-2,0.512,0.6220472440944882],[45.056,-16,1.536,0.5433070866141733],[45.056,-4,1.536,0.6377952755905512],[45.568,8,0.512,0.5669291338582677],[46.08,13,0.512,0.5748031496062992],[46.08,16,0.512,0.5748031496062992],[46.08,20,0.512,0.6141732283464567],[46.592,11,1.024,0.5826771653543307],[46.592,16,1.024,0.5826771653543307],[46.592,20,1.024,0.5826771653543307],[46.592,23,1.024,0.6220472440944882],[47.104,-28,0.512,0.5433070866141733],[47.104,-16,0.512,0.6377952755905512],[47.616,-27,1.536,0.5511811023622047],[47.616,-15,1.536,0.6456692913385826],[48.128,11,0.512,0.6220472440944882],[48.64,15,0.512,0.5196850393700787],[48.64,18,0.512,0.5196850393700787],[48.64,23,0.512,0.6220472440944882],[49.152,10,1.024,0.5196850393700787],[49.152,15,1.024,0.5196850393700787],[49.152,18,1.024,0.5196850393700787],[49.152,22,1.024,0.6141732283464567],[49.152,-26,0.512,0.5433070866141733],[49.152,-14,0.512,0.6299212598425197],[49.664,-21,0.512,0.5354330708661418],[49.664,-9,0.512,0.6299212598425197],[50.176,-19,2.048,0.5354330708661418],[50.176,-7,2.048,0.6299212598425197],[50.688,3,0.512,0.5590551181102362],[51.2,10,0.512,0.4566929133858268],[51.2,15,0.512,0.5511811023622047],[51.712,-2,1.024,0.4566929133858268],[51.712,3,1.024,0.4566929133858268],[51.712,10,1.024,0.5511811023622047],[52.224000000000004,-18,0.512,0.5196850393700787],[52.224000000000004,-6,0.512,0.6062992125984252],[52.736000000000004,-14,1.536,0.5118110236220472],[52.736000000000004,-2,1.536,0.5984251968503937],[53.248000000000005,-7,0.512,0.5433070866141733],[53.76,3,0.512,0.4409448818897638],[53.76,5,0.512,0.5354330708661418],[54.272,-6,1.024,0.4409448818897638],[54.272,3,1.024,0.4409448818897638],[54.272,6,1.024,0.5275590551181102],[54.784,-26,0.512,0.41732283464566927],[54.784,-14,0.512,0.5039370078740157],[55.296,-18,2.048,0.4094488188976378],[55.296,-6,2.048,0.49606299212598426],[55.808,-2,0.512,0.5354330708661418],[56.32,2,0.512,0.44881889763779526],[56.32,8,0.512,0.44881889763779526],[56.32,10,0.512,0.5196850393700787],[56.832,-1,1.024,0.48031496062992124],[56.832,2,1.024,0.48031496062992124],[56.832,8,1.024,0.48031496062992124],[56.832,11,1.024,0.5669291338582677],[57.344,-19,0.512,0.4251968503937008],[57.344,-7,0.512,0.5039370078740157],[57.856,-18,2.048,0.4330708661417323],[57.856,-6,2.048,0.5118110236220472],[58.368,2,0.512,0.5354330708661418],[58.88,8,0.512,0.4645669291338583],[58.88,11,0.512,0.5196850393700787],[59.392,2,1.024,0.4881889763779528],[59.392,8,1.024,0.4881889763779528],[59.392,10,1.024,0.4881889763779528],[59.392,14,1.024,0.5590551181102362],[59.904,-19,0.512,0.4409448818897638],[59.904,-7,0.512,0.5196850393700787],[60.416000000000004,-14,2.048,0.4409448818897638],[60.416000000000004,-2,2.048,0.5196850393700787],[60.928000000000004,2,0.512,0.5039370078740157],[61.44,8,0.512,0.4015748031496063],[61.44,10,0.512,0.44881889763779526],[61.44,14,0.512,0.5275590551181102],[61.952,6,1.024,0.4015748031496063],[61.952,10,1.024,0.4015748031496063],[61.952,14,1.024,0.4015748031496063],[61.952,18,1.024,0.5511811023622047],[62.464,-26,0.512,0.4566929133858268],[62.464,-14,0.512,0.5354330708661418],[62.976,-21,1.536,0.4251968503937008],[62.976,-9,1.536,0.5039370078740157],[63.488,10,0.512,0.5433070866141733],[64,6,0.512,0.47244094488188976],[64,15,0.512,0.5590551181102362],[64.512,6,1.024,0.4645669291338583],[64.512,10,1.024,0.4645669291338583],[64.512,15,1.024,0.4645669291338583],[64.512,17,1.024,0.5590551181102362],[64.512,-6,1.024,0.4645669291338583],[64.512,-2,1.024,0.4645669291338583],[64.512,3,1.024,0.4645669291338583],[64.512,5,1.024,0.5039370078740157],[65.024,-26,0.512,0.4645669291338583],[65.024,-14,0.512,0.5511811023622047],[65.536,-21,1.536,0.48031496062992124],[65.536,-9,1.536,0.5669291338582677],[66.048,10,0.512,0.5905511811023622],[66.56,15,0.512,0.5118110236220472],[66.56,18,0.512,0.6062992125984252],[67.072,10,1.024,0.5196850393700787],[67.072,15,1.024,0.5196850393700787],[67.072,17,1.024,0.5196850393700787],[67.072,20,1.024,0.6062992125984252],[67.072,-2,1.024,0.4881889763779528],[67.072,3,1.024,0.4881889763779528],[67.072,5,1.024,0.4881889763779528],[67.072,8,1.024,0.5275590551181102],[67.584,-21,0.512,0.5275590551181102],[67.584,-9,0.512,0.6141732283464567],[68.096,-18,1.536,0.5354330708661418],[68.096,-6,1.536,0.6299212598425197],[68.608,15,0.512,0.6377952755905512],[69.12,10,0.512,0.5590551181102362],[69.12,22,0.512,0.6535433070866141],[69.632,11,1.024,0.5590551181102362],[69.632,15,1.024,0.5590551181102362],[69.632,23,1.024,0.6614173228346457],[69.632,-1,1.024,0.5118110236220472],[69.632,3,1.024,0.5118110236220472],[69.632,6,1.024,0.5511811023622047],[70.144,-18,0.512,0.5826771653543307],[70.144,-6,0.512,0.6771653543307087],[70.656,-13,4.6080000000000005,0.6377952755905512],[70.656,-1,4.6080000000000005,0.7244094488188977],[71.168,15,0.512,0.6929133858267716],[71.68,10,0.512,0.5905511811023622],[71.68,22,0.512,0.7007874015748031],[72.19200000000001,9,0.512,0.5984251968503937],[72.19200000000001,15,0.512,0.5984251968503937],[72.19200000000001,21,0.512,0.7086614173228346],[72.19200000000001,-3,0.512,0.5196850393700787],[72.19200000000001,3,0.512,0.5196850393700787],[72.70400000000001,15,0.512,0.6299212598425197],[72.70400000000001,27,0.512,0.7480314960629921],[72.70400000000001,3,0.512,0.5196850393700787],[73.21600000000001,15,0.512,0.6377952755905512],[73.21600000000001,27,0.512,0.7559055118110236],[73.21600000000001,3,1.024,0.5196850393700787],[73.72800000000001,15,0.512,0.7007874015748031],[74.24,8,0.512,0.5826771653543307],[74.24,20,0.512,0.6929133858267716],[74.24,-4,0.512,0.5196850393700787],[74.24,3,0.512,0.5196850393700787],[74.752,7,1.024,0.5669291338582677],[74.752,15,1.024,0.5669291338582677],[74.752,19,1.024,0.6771653543307087],[74.752,-5,1.024,0.5196850393700787],[74.752,3,1.024,0.5196850393700787],[75.264,-13,0.512,0.48031496062992124],[75.264,-1,0.512,0.6299212598425197],[75.776,-13,2.048,0.48031496062992124],[75.776,-1,2.048,0.6299212598425197],[76.288,15,0.512,0.6062992125984252],[76.8,6,0.512,0.4881889763779528],[76.8,18,0.512,0.5826771653543307],[76.8,-6,0.512,0.5196850393700787],[76.8,-4,0.512,0.5196850393700787],[76.8,3,0.512,0.5196850393700787],[77.312,5,1.024,0.47244094488188976],[77.312,14,1.024,0.47244094488188976],[77.312,17,1.024,0.5590551181102362],[77.312,-7,1.024,0.5196850393700787],[77.312,-4,1.024,0.5196850393700787],[77.312,2,1.024,0.5196850393700787],[77.824,-26,0.512,0.48031496062992124],[77.824,-14,0.512,0.5748031496062992],[78.336,-21,1.536,0.48031496062992124],[78.336,-9,1.536,0.5748031496062992],[78.848,10,0.512,0.6141732283464567],[79.36,6,0.512,0.5275590551181102],[79.36,15,0.512,0.6220472440944882],[79.872,6,1.024,0.5196850393700787],[79.872,10,1.024,0.5196850393700787],[79.872,15,1.024,0.5196850393700787],[79.872,17,1.024,0.6220472440944882],[79.872,-6,1.024,0.5196850393700787],[79.872,-2,1.024,0.5196850393700787],[79.872,3,1.024,0.5196850393700787],[79.872,5,1.024,0.5590551181102362],[80.384,-26,0.512,0.5118110236220472],[80.384,-14,0.512,0.6062992125984252],[80.896,-21,1.536,0.5196850393700787],[80.896,-9,1.536,0.6141732283464567],[81.408,10,0.512,0.6377952755905512],[81.92,15,0.512,0.5433070866141733],[81.92,18,0.512,0.6456692913385826],[82.432,10,1.024,0.5511811023622047],[82.432,15,1.024,0.5511811023622047],[82.432,17,1.024,0.5511811023622047],[82.432,20,1.024,0.6456692913385826],[82.432,-2,1.024,0.5196850393700787],[82.432,3,1.024,0.5196850393700787],[82.432,5,1.024,0.5196850393700787],[82.432,8,1.024,0.5590551181102362],[82.944,-21,0.512,0.5511811023622047],[82.944,-9,0.512,0.6456692913385826],[83.456,-18,1.536,0.5590551181102362],[83.456,-6,1.536,0.6535433070866141],[83.968,15,0.512,0.6614173228346457],[84.48,10,0.512,0.5669291338582677],[84.48,22,0.512,0.6692913385826772],[84.992,11,1.024,0.5669291338582677],[84.992,15,1.024,0.5669291338582677],[84.992,23,1.024,0.6771653543307087],[84.992,-1,1.024,0.5196850393700787],[84.992,3,1.024,0.5196850393700787],[84.992,6,1.024,0.5590551181102362],[85.504,-18,0.512,0.5905511811023622],[85.504,-6,0.512,0.6850393700787402],[86.016,-13,4.6080000000000005,0.6377952755905512],[86.016,-1,4.6080000000000005,0.7244094488188977],[86.528,15,0.512,0.6929133858267716],[87.04,10,0.512,0.5905511811023622],[87.04,22,0.512,0.7007874015748031],[87.552,9,0.512,0.5984251968503937],[87.552,15,0.512,0.5984251968503937],[87.552,21,0.512,0.7086614173228346],[87.552,-3,0.512,0.5196850393700787],[87.552,3,0.512,0.5196850393700787],[88.06400000000001,15,0.512,0.6299212598425197],[88.06400000000001,27,0.512,0.7480314960629921],[88.06400000000001,3,0.512,0.5196850393700787],[88.57600000000001,15,0.512,0.6377952755905512],[88.57600000000001,27,0.512,0.7559055118110236],[88.57600000000001,3,1.024,0.5196850393700787],[89.08800000000001,15,0.512,0.7007874015748031],[89.60000000000001,8,0.512,0.5826771653543307],[89.60000000000001,20,0.512,0.6929133858267716],[89.60000000000001,-4,0.512,0.5196850393700787],[89.60000000000001,3,0.512,0.5196850393700787],[90.112,7,1.024,0.5669291338582677],[90.112,15,1.024,0.5669291338582677],[90.112,19,1.024,0.6771653543307087],[90.112,-5,1.024,0.5196850393700787],[90.112,3,1.024,0.5196850393700787],[90.624,-13,0.512,0.48031496062992124],[90.624,-1,0.512,0.6299212598425197],[91.136,-13,2.048,0.48031496062992124],[91.136,-1,2.048,0.6299212598425197],[91.648,15,0.512,0.6062992125984252],[92.16,6,0.512,0.4881889763779528],[92.16,18,0.512,0.5826771653543307],[92.16,-6,0.512,0.5196850393700787],[92.16,-4,0.512,0.5196850393700787],[92.16,3,0.512,0.5196850393700787],[92.672,5,1.024,0.47244094488188976],[92.672,14,1.024,0.47244094488188976],[92.672,17,1.024,0.5590551181102362],[92.672,-7,1.024,0.5196850393700787],[92.672,-4,1.024,0.5196850393700787],[92.672,2,1.024,0.5196850393700787],[93.184,-26,0.512,0.48031496062992124],[93.184,-14,0.512,0.5748031496062992],[93.696,-16,1.536,0.5196850393700787],[93.696,-4,1.536,0.6141732283464567],[94.208,10,0.512,0.5196850393700787],[94.72,14,0.512,0.5196850393700787],[94.72,22,0.512,0.5590551181102362],[95.232,11,1.024,0.5275590551181102],[95.232,14,1.024,0.5275590551181102],[95.232,23,1.024,0.6299212598425197],[95.232,-4,0,0.44881889763779526],[95.232,2,1.024,0.44881889763779526],[95.232,5,1.024,0.5590551181102362],[95.744,-16,0.512,0.5275590551181102],[95.744,-4,0.512,0.6220472440944882],[96.256,-18,1.536,0.5354330708661418],[96.256,-6,1.536,0.6299212598425197],[96.768,11,0.512,0.5354330708661418],[97.28,15,0.512,0.5433070866141733],[97.28,23,0.512,0.5826771653543307],[97.792,14,1.024,0.5433070866141733],[97.792,20,1.024,0.5433070866141733],[97.792,22,1.024,0.5433070866141733],[97.792,26,1.024,0.6456692913385826],[97.792,2,1.024,0.4645669291338583],[97.792,8,1.024,0.4645669291338583],[97.792,10,1.024,0.5748031496062992],[98.304,-19,0.512,0.5511811023622047],[98.304,-7,0.512,0.6456692913385826],[98.816,-21,1.536,0.5511811023622047],[98.816,-9,1.536,0.6456692913385826],[99.328,15,0.512,0.5590551181102362],[99.84,20,0.512,0.5590551181102362],[99.84,23,0.512,0.5590551181102362],[99.84,27,0.512,0.5984251968503937],[100.352,18,1.024,0.5669291338582677],[100.352,23,1.024,0.5669291338582677],[100.352,27,1.024,0.5669291338582677],[100.352,30,1.024,0.6692913385826772],[100.352,-1,1.024,0.4881889763779528],[100.352,3,1.024,0.4881889763779528],[100.352,6,1.024,0.4881889763779528],[100.352,11,1.024,0.5984251968503937],[100.864,-21,0.512,0.5669291338582677],[100.864,-9,0.512,0.6614173228346457],[101.376,-23,1.536,0.5748031496062992],[101.376,-11,1.536,0.6692913385826772],[101.888,15,0.512,0.5748031496062992],[102.4,19,0.512,0.5826771653543307],[102.4,27,0.512,0.6220472440944882],[102.912,16,1.024,0.5826771653543307],[102.912,19,1.024,0.5826771653543307],[102.912,28,1.024,0.6850393700787402],[102.912,-5,1.024,0.5118110236220472],[102.912,-2,1.024,0.5118110236220472],[102.912,4,1.024,0.5118110236220472],[102.912,7,1.024,0.6220472440944882],[103.424,-23,0.512,0.5905511811023622],[103.424,-11,0.512,0.6850393700787402],[103.936,-25,1.536,0.5905511811023622],[103.936,-13,1.536,0.6850393700787402],[104.44800000000001,16,0.512,0.5984251968503937],[104.96000000000001,20,0.512,0.5984251968503937],[104.96000000000001,28,0.512,0.6377952755905512],[105.47200000000001,19,1.024,0.6062992125984252],[105.47200000000001,25,1.024,0.6062992125984252],[105.47200000000001,27,1.024,0.6062992125984252],[105.47200000000001,31,1.024,0.7086614173228346],[105.47200000000001,-5,1.024,0.5354330708661418],[105.47200000000001,1,1.024,0.5354330708661418],[105.47200000000001,3,1.024,0.5354330708661418],[105.47200000000001,7,1.024,0.6456692913385826],[105.98400000000001,-26,0.512,0.6062992125984252],[105.98400000000001,-14,0.512,0.7007874015748031],[106.49600000000001,-28,1.536,0.6141732283464567],[106.49600000000001,-16,1.536,0.7086614173228346],[107.008,20,0.512,0.6141732283464567],[107.52,25,0.512,0.6220472440944882],[107.52,28,0.512,0.6220472440944882],[107.52,32,0.512,0.6614173228346457],[108.032,23,1.024,0.6299212598425197],[108.032,28,1.024,0.6299212598425197],[108.032,32,1.024,0.6299212598425197],[108.032,35,1.024,0.7322834645669292],[108.032,-8,1.024,0.5590551181102362],[108.032,-4,1.024,0.5590551181102362],[108.032,-1,1.024,0.5590551181102362],[108.032,4,1.024,0.6692913385826772],[108.544,-28,0.512,0.6299212598425197],[108.544,-16,0.512,0.7244094488188977],[109.056,-27,1.536,0.6377952755905512],[109.056,-15,1.536,0.7322834645669292],[109.568,23,0.512,0.6535433070866141],[110.08,27,0.512,0.6141732283464567],[110.08,30,0.512,0.6141732283464567],[110.08,35,0.512,0.6929133858267716],[110.592,22,1.024,0.6062992125984252],[110.592,27,1.024,0.6062992125984252],[110.592,30,1.024,0.6062992125984252],[110.592,34,1.024,0.6850393700787402],[110.592,-26,0.512,0.5275590551181102],[110.592,-14,0.512,0.6220472440944882],[111.104,-21,0.512,0.5275590551181102],[111.104,-9,0.512,0.6220472440944882],[111.616,-19,2.048,0.5196850393700787],[111.616,-7,2.048,0.6141732283464567],[112.128,15,0.512,0.6141732283464567],[112.64,22,0.512,0.6062992125984252],[112.64,27,0.512,0.6771653543307087],[113.152,10,1.024,0.6062992125984252],[113.152,15,1.024,0.6062992125984252],[113.152,22,1.024,0.6771653543307087],[113.664,-18,0.512,0.5039370078740157],[113.664,-6,0.512,0.5984251968503937],[114.176,-14,1.536,0.5039370078740157],[114.176,-2,1.536,0.5984251968503937],[114.688,5,0.512,0.5905511811023622],[115.2,15,0.512,0.5905511811023622],[115.2,17,0.512,0.6299212598425197],[115.712,6,1.024,0.5826771653543307],[115.712,10,1.024,0.5826771653543307],[115.712,15,1.024,0.5826771653543307],[115.712,18,1.024,0.6220472440944882],[116.224,-28,0.512,0.4881889763779528],[116.224,-16,0.512,0.5826771653543307],[116.736,-27,1.536,0.5511811023622047],[116.736,-15,1.536,0.6456692913385826],[117.248,11,0.512,0.5433070866141733],[117.76,15,0.512,0.49606299212598426],[117.76,18,0.512,0.49606299212598426],[117.76,23,0.512,0.5748031496062992],[118.272,10,1.024,0.47244094488188976],[118.272,15,1.024,0.47244094488188976],[118.272,18,1.024,0.47244094488188976],[118.272,22,1.024,0.5590551181102362],[118.272,-26,0.512,0.47244094488188976],[118.272,-14,0.512,0.5669291338582677],[118.784,-21,0.512,0.47244094488188976],[118.784,-9,0.512,0.5669291338582677],[119.296,-19,2.048,0.4645669291338583],[119.296,-7,2.048,0.5590551181102362],[119.808,3,0.512,0.49606299212598426],[120.32000000000001,10,0.512,0.48031496062992124],[120.32000000000001,15,0.512,0.5118110236220472],[120.83200000000001,-2,1.024,0.47244094488188976],[120.83200000000001,3,1.024,0.47244094488188976],[120.83200000000001,10,1.024,0.5590551181102362],[121.34400000000001,-18,0.512,0.44881889763779526],[121.34400000000001,-6,0.512,0.5433070866141733],[121.85600000000001,-14,1.536,0.44881889763779526],[121.85600000000001,-2,1.536,0.5433070866141733],[122.36800000000001,-7,0.512,0.4409448818897638],[122.88,3,0.512,0.4330708661417323],[122.88,5,0.512,0.4645669291338583],[123.392,-6,1.024,0.4251968503937008],[123.392,3,1.024,0.4251968503937008],[123.392,6,1.024,0.5275590551181102],[123.904,-26,0.512,0.4330708661417323],[123.904,-14,0.512,0.5275590551181102],[124.416,-18,2.048,0.3543307086614173],[124.416,-6,2.048,0.5196850393700787],[124.928,-9,0.512,0.4409448818897638],[125.44,-4,0.512,0.3858267716535433],[125.44,-1,0.512,0.3858267716535433],[125.44,3,0.512,0.4566929133858268],[125.952,-10,1.024,0.4094488188976378],[125.952,-4,1.024,0.4094488188976378],[125.952,-1,1.024,0.4094488188976378],[125.952,2,1.024,0.5039370078740157],[126.464,-19,0.512,0.4251968503937008],[126.464,-7,0.512,0.5039370078740157],[126.976,-18,2.048,0.4409448818897638],[126.976,-6,2.048,0.5196850393700787],[127.488,-9,0.512,0.5511811023622047],[128,-4,0.512,0.4251968503937008],[128,-1,0.512,0.5196850393700787],[128,3,0.512,0.5196850393700787],[128.512,-10,1.024,0.5039370078740157],[128.512,-4,1.024,0.5039370078740157],[128.512,-1,1.024,0.5039370078740157],[128.512,2,1.024,0.5984251968503937],[129.024,-19,0.512,0.5196850393700787],[129.024,-7,0.512,0.6062992125984252],[129.536,-20,2.048,0.5354330708661418],[129.536,-8,2.048,0.6220472440944882],[130.048,-4,0.512,0.5984251968503937],[130.56,2,0.512,0.47244094488188976],[130.56,8,0.512,0.5590551181102362],[131.072,-10,1.024,0.4409448818897638],[131.072,-4,1.024,0.4409448818897638],[131.072,2,1.024,0.5196850393700787],[131.584,-19,0.512,0.48031496062992124],[131.584,-7,0.512,0.5748031496062992],[132.096,-18,2.048,0.3543307086614173],[132.096,-6,2.048,0.5196850393700787],[132.608,-9,0.512,0.4409448818897638],[133.12,-4,0.512,0.3858267716535433],[133.12,-1,0.512,0.3858267716535433],[133.12,3,0.512,0.4566929133858268],[133.632,-10,1.024,0.4094488188976378],[133.632,-4,1.024,0.4094488188976378],[133.632,-1,1.024,0.4094488188976378],[133.632,2,1.024,0.5039370078740157],[134.144,-19,0.512,0.4251968503937008],[134.144,-7,0.512,0.5039370078740157],[134.656,-18,2.048,0.4409448818897638],[134.656,-6,2.048,0.5196850393700787],[135.168,-9,0.512,0.5511811023622047],[135.68,-4,0.512,0.4251968503937008],[135.68,-1,0.512,0.5196850393700787],[135.68,3,0.512,0.5196850393700787],[136.192,-10,1.024,0.5039370078740157],[136.192,-4,1.024,0.5039370078740157],[136.192,-1,1.024,0.5039370078740157],[136.192,2,1.024,0.5984251968503937],[136.704,-19,0.512,0.5196850393700787],[136.704,-7,0.512,0.6062992125984252],[137.216,-20,2.048,0.5354330708661418],[137.216,-8,2.048,0.6220472440944882],[137.728,-4,0.512,0.5984251968503937],[138.24,2,0.512,0.47244094488188976],[138.24,8,0.512,0.5590551181102362],[138.752,-10,1.024,0.4409448818897638],[138.752,-4,1.024,0.4409448818897638],[138.752,2,1.024,0.5196850393700787],[139.264,-19,0.512,0.48031496062992124],[139.264,-7,0.512,0.5748031496062992],[139.776,-21,2.048,0.5590551181102362],[139.776,-9,1.024,0.6535433070866141],[140.288,-9,0.512,0.5590551181102362],[140.8,-4,0.512,0.47244094488188976],[140.8,-1,0.512,0.47244094488188976],[140.8,3,0.512,0.5669291338582677],[141.312,-1,1.024,0.48031496062992124],[141.312,3,1.024,0.48031496062992124],[141.312,5,1.024,0.5669291338582677],[141.824,-28,0.512,0.5826771653543307],[141.824,-16,0.512,0.6771653543307087],[142.336,-13,2.048,0.5826771653543307],[142.336,-1,2.048,0.6771653543307087],[142.848,-4,0.512,0.5905511811023622],[143.36,3,0.512,0.5039370078740157],[143.36,5,0.512,0.5984251968503937],[143.36,8,0.512,0.5984251968503937],[143.872,3,1.024,0.5039370078740157],[143.872,5,1.024,0.5039370078740157],[143.872,8,1.024,0.6062992125984252],[144.38400000000001,-13,0.512,0.6141732283464567],[144.38400000000001,-1,0.512,0.7086614173228346],[144.89600000000002,-13,2.048,0.6220472440944882],[144.89600000000002,-1,2.048,0.7165354330708661],[145.40800000000002,3,0.512,0.6299212598425197],[145.92000000000002,8,0.512,0.5275590551181102],[145.92000000000002,15,0.512,0.6299212598425197],[146.43200000000002,3,1.024,0.5275590551181102],[146.43200000000002,8,1.024,0.5275590551181102],[146.43200000000002,15,1.024,0.6377952755905512],[146.94400000000002,-9,0.512,0.6535433070866141],[146.94400000000002,3,0.512,0.7480314960629921],[147.45600000000002,-9,2.048,0.6535433070866141],[147.45600000000002,3,1.024,0.7480314960629921],[147.968,3,0.512,0.6614173228346457],[148.48,8,0.512,0.5669291338582677],[148.48,11,0.512,0.5669291338582677],[148.48,15,0.512,0.6771653543307087],[148.992,5,1.024,0.5669291338582677],[148.992,11,1.024,0.5669291338582677],[148.992,15,1.024,0.5669291338582677],[148.992,17,1.024,0.6771653543307087],[149.504,-16,0.512,0.5905511811023622],[149.504,-4,0.512,0.6850393700787402],[150.016,-1,2.048,0.6062992125984252],[150.016,11,2.048,0.7007874015748031],[150.528,8,0.512,0.7007874015748031],[151.04,15,0.512,0.5826771653543307],[151.04,17,0.512,0.5826771653543307],[151.04,20,0.512,0.7086614173228346],[151.552,8,1.024,0.5905511811023622],[151.552,15,1.024,0.5905511811023622],[151.552,17,1.024,0.5905511811023622],[151.552,20,1.024,0.7165354330708661],[152.064,-1,0.512,0.6299212598425197],[152.064,11,0.512,0.7244094488188977],[152.576,-1,1.536,0.6377952755905512],[152.576,11,1.536,0.7322834645669292],[153.088,15,0.512,0.7401574803149606],[153.6,20,0.512,0.6220472440944882],[153.6,27,0.512,0.7559055118110236],[154.112,17,1.024,0.6299212598425197],[154.112,20,1.024,0.6299212598425197],[154.112,27,1.024,0.6299212598425197],[154.112,29,1.024,0.7559055118110236],[154.624,-26,0.512,0.6692913385826772],[154.624,-14,0.512,0.7637795275590551],[155.136,-33,2.048,0.5748031496062992],[155.136,-21,2.048,0.6692913385826772],[155.648,22,0.512,0.6692913385826772],[156.16,27,0.512,0.6692913385826772],[156.16,29,0.512,0.7086614173228346],[156.672,22,1.024,0.6692913385826772],[156.672,27,1.024,0.6692913385826772],[156.672,30,1.024,0.7086614173228346],[157.184,-14,0.512,0.6141732283464567],[157.184,-2,0.512,0.7086614173228346],[157.696,-6,1.536,0.6141732283464567],[157.696,6,1.536,0.7086614173228346],[158.208,15,0.512,0.6299212598425197],[158.72,18,0.512,0.6299212598425197],[158.72,23,0.512,0.6692913385826772],[159.232,15,1.024,0.6299212598425197],[159.232,18,1.024,0.6299212598425197],[159.232,22,1.024,0.6692913385826772],[159.744,-14,0.512,0.5354330708661418],[159.744,-2,0.512,0.6299212598425197],[160.256,-14,1.536,0.5354330708661418],[160.256,-2,1.536,0.6299212598425197],[160.768,10,0.512,0.6299212598425197],[161.28,15,0.512,0.6299212598425197],[161.28,17,0.512,0.6692913385826772],[161.792,10,1.024,0.6299212598425197],[161.792,15,1.024,0.6299212598425197],[161.792,18,1.024,0.6692913385826772],[162.304,-26,0.512,0.5354330708661418],[162.304,-14,0.512,0.6299212598425197],[162.816,-33,1.536,0.5354330708661418],[162.816,-21,1.536,0.6299212598425197],[163.328,3,0.512,0.6299212598425197],[163.84,6,0.512,0.6299212598425197],[163.84,11,0.512,0.6692913385826772],[164.352,3,1.024,0.6299212598425197],[164.352,6,1.024,0.6299212598425197],[164.352,10,1.024,0.6692913385826772],[164.864,-14,0.512,0.5354330708661418],[164.864,-2,0.512,0.6299212598425197],[165.376,-14,1.536,0.5354330708661418],[165.376,-2,1.024,0.6299212598425197],[165.888,-2,0.512,0.6299212598425197],[166.4,3,0.512,0.6299212598425197],[166.4,5,0.512,0.6692913385826772],[166.912,-2,0,0.6299212598425197],[166.912,3,1.024,0.6299212598425197],[166.912,6,1.024,0.6692913385826772],[167.424,-26,0.512,0.5354330708661418],[167.424,-14,0.512,0.6299212598425197],[167.936,-26,1.536,0.5354330708661418],[167.936,-14,1.536,0.6299212598425197],[168.448,-9,0.512,0.6299212598425197],[168.96,-6,0.512,0.6299212598425197],[168.96,-1,0.512,0.6692913385826772],[169.472,-9,1.024,0.6299212598425197],[169.472,-6,1.024,0.6299212598425197],[169.472,-2,1.024,0.6692913385826772],[169.984,-33,0.512,0.5354330708661418],[169.984,-21,0.512,0.6299212598425197],[170.496,-33,1.536,0.5354330708661418],[170.496,-21,1.536,0.6299212598425197],[171.008,-14,0.512,0.6299212598425197],[171.52,-9,0.512,0.5748031496062992],[171.52,-7,0.512,0.6692913385826772],[172.032,-14,1.024,0.5748031496062992],[172.032,-9,1.024,0.5748031496062992],[172.032,-6,1.024,0.6692913385826772],[172.544,-33,0.512,0.5354330708661418],[172.544,-21,0.512,0.6299212598425197],[173.056,-33,1.536,0.5354330708661418],[173.056,-21,1.536,0.6299212598425197],[173.568,-14,0.512,0.6299212598425197],[174.08,-9,0.512,0.5748031496062992],[174.08,-7,0.512,0.6692913385826772],[174.592,-14,1.024,0.6141732283464567],[174.592,-9,1.024,0.6141732283464567],[174.592,-6,1.024,0.7086614173228346],[175.104,-33,0.512,0.5196850393700787],[175.104,-21,0.512,0.5984251968503937],[175.616,-14,0.512,0.5905511811023622],[175.616,-9,0.512,0.5905511811023622],[175.616,-6,0.512,0.6771653543307087],[175.616,-33,0.512,0.5354330708661418],[175.616,-21,0.512,0.6141732283464567],[176.12800000000001,-14,0.512,0.6141732283464567],[176.12800000000001,-9,0.512,0.6141732283464567],[176.12800000000001,-6,0.512,0.7007874015748031],[176.12800000000001,-33,0.512,0.5590551181102362],[176.12800000000001,-21,0.512,0.6456692913385826],[176.64000000000001,-14,0.512,0.6377952755905512],[176.64000000000001,-9,0.512,0.6377952755905512],[176.64000000000001,-6,0.512,0.7244094488188977],[176.64000000000001,-33,0.512,0.5748031496062992],[176.64000000000001,-21,0.512,0.6614173228346457],[177.15200000000002,-14,0.512,0.6535433070866141],[177.15200000000002,-9,0.512,0.6535433070866141],[177.15200000000002,-6,0.512,0.7559055118110236],[177.15200000000002,-33,0.512,0.5905511811023622],[177.15200000000002,-21,0.512,0.6771653543307087],[177.66400000000002,-14,0.512,0.6771653543307087],[177.66400000000002,-9,0.512,0.6771653543307087],[177.66400000000002,-6,0.512,0.7795275590551181],[177.66400000000002,-33,0.512,0.6141732283464567],[177.66400000000002,-21,0.512,0.7086614173228346],[178.17600000000002,-14,7.68,0.7007874015748031],[178.17600000000002,-9,7.68,0.7007874015748031],[178.17600000000002,-6,7.68,0.8110236220472441],[178.17600000000002,-33,7.68,0.6299212598425197],[178.17600000000002,-26,7.68,0.6299212598425197],[178.17600000000002,-21,7.68,0.7244094488188977]]};
