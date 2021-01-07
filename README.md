Passos para gerar o apk assinado:

1 - Gerar a chave para upload
    1.1 - Windows
        - Abrir o cmd e digitar: $ keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
        - Se tudo estiver ok, um arquivo será gerado: my-upload-key.keystore
    1.2 - MacOS
        - Abrir o terminal e digitar: $ sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
          - Se tudo estiver ok, um arquivo será gerado: my-upload-key.keystore

2 - Setar as variabeis no Gradle
    2.1 - Navegue até o diretório android/app do projeto
    2.2 - Edite o arquivo ~/.gradle/gradle.properties ou android/gradle.properties
    2.3 - Adicione as seguintes informações: (Obs.: Substitua o *****) pela senha preenchida no passo anterior.
        MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
        MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
        MYAPP_UPLOAD_STORE_PASSWORD=*****
        MYAPP_UPLOAD_KEY_PASSWORD=*****
    2.4 - O Resultado deverá ser algo do tipo:
        ...
        android {
            ...
            defaultConfig { ... }
            signingConfigs {
                release {
                    if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                        storeFile file(MYAPP_UPLOAD_STORE_FILE)
                        storePassword MYAPP_UPLOAD_STORE_PASSWORD
                        keyAlias MYAPP_UPLOAD_KEY_ALIAS
                        keyPassword MYAPP_UPLOAD_KEY_PASSWORD
                    }
                }
            }
            buildTypes {
                release {
                    ...
                    signingConfig signingConfigs.release
                }
            }
        }
        ...
3 - Gerando o APK de release
    3.1 - No terminal, dentro do projeto digite:
    3.2 - cd android
    3.3 - ./gradlew bundleRelease
    3.4 - Agora só publicar!!!
4 - Testando o build de release no emulador e/ou dispositivo fisico
    4.1 - No terminal, dentro do projeto digite:
    4.2 - npx react-native run-android --variant=release