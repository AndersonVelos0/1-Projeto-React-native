import React from "react";
import { StyleSheet, Text, ScrollView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("./assets/Foto.jpeg")} style={styles.image} />
      <Text style={styles.header}>Veloso, Anderson</Text>
      <Text style={styles.subheader}>
        Analysis and Systems Development Student
      </Text>
      <Text style={styles.paragraph}>
      I'm 23 years old and work as a data engineer at NTT Data Global & Latam. I'm from Recife, Pernambuco, and I love cinema.
      </Text>
      <Text style={styles.paragraph}>
        Technologies I've had experience with:
      </Text>
      <Text style={styles.listItem}>
        • Libraries and Frameworks: Springboot, Bootstrap, Django.
      </Text>
      <Text style={styles.listItem}>
        • Programming languages: Java, Python, Spark, Scala.
      </Text>
      <Text style={styles.listItem}>• Database: MySQL, Cosmos DB, MongoDB.</Text>
      <Text style={styles.listItem}>• Data Process tools: Git, GitHub, Microsoft Azure, Azure Synapse.</Text>
      <Text style={styles.paragraph}>
      I am seeking opportunities in the IT field to apply technical skills and problem-solving abilities, 
      contributing to the company's objectives and continuously updating myself in the technology market.
      </Text>
      <Text style={styles.paragraph}>
        You can check a little bit of me in my LinkedIn page {""}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://www.linkedin.com/in/anderson-veloso-70ab15189/")}
        >
        </Text>{" "}
        {""}
        and explore my work on GitHub at {""}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://github.com/AndersonVelos0")}
        >
          github.com/AndersonVelos0
        </Text>
        .
      </Text>
    </ScrollView>
  );
}

function ExperienceScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subheader}>
        Data Engineer at NTT DATA Global & Latam
      </Text>
      <Text style={styles.paragraph}>• Feb 2024 - Present</Text>
      <Text style={styles.paragraph}>
        • I work as a data engineer building data pipelines in Azure Synapse Analytics, where I perform the transformation, normalization, and cleaning of data from various sources. I use Python with the PySpark library for these tasks. In addition to Python, I also use Spark, Scala, and SQL.
      </Text>
      <Text style={styles.subheader}>
        ICOMON Tecnology / Telefonica Vivo
      </Text>
      <Text style={styles.paragraph}>• Jun 2022 - Mar 2023</Text>
      <Text style={styles.paragraph}>
        • Perform tests on telecommunications sites through Telefonica Vivo, coordinate the dispatch of technicians to investigate failures affecting the mobile network in Northeast Brazil, responsible for keeping event logs updated.
      </Text>
      <Text style={styles.subheader}>Intern at Bradesco S.A</Text>
      <Text style={styles.paragraph}>• Aug 2023 - Feb 2024</Text>
      <Text style={styles.paragraph}>
        • I conduct data collection from various sources, including internal and external databases. I am responsible for data cleaning and preparation, identifying and correcting inconsistencies to ensure data is ready for analysis. Additionally, I participate in statistical analyses to identify trends, patterns, and insights in the data, which aids in the company's strategies and guidance. I also work with data visualization tools such as PowerPoint and Power BI to create informative charts and dashboards.
      </Text>
    </ScrollView>
  );
}

function EducationScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subheader}>
        Degree in Analysis and Systems Development
      </Text>
      <Text style={styles.paragraph}>
        Secac Pernambuco College, Mar 2023 - Present.
      </Text>
      <Text style={styles.subheader}>Bachelor's Degree in Computer Science - UFRPE</Text>
      <Text style={styles.paragraph}>
        Federal Rural University of Pernambuco, Feb 2021 - Present.
      </Text>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Experience") {
              iconName = focused ? "briefcase" : "briefcase-outline";
            } else if (route.name === "Education") {
              iconName = focused ? "school" : "school-outline";
            }

            const iconSize = focused ? 30 : 25;

            return <Ionicons name={iconName} size={iconSize} color={color} />;
          },
          tabBarActiveTintColor: "#008080",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#f8f8f8",
            borderTopWidth: 0,
          },

          headerStyle: {
            backgroundColor: "#008080",
          },
          headerTintColor: "#fff",
        })}
      >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Experience" component={ExperienceScreen} />
        <Tab.Screen name="Education" component={EducationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subheader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "justify",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
  },
  listItem: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: "justify",
  },
  link: {
    color: "#008080",
    textDecorationLine: "underline",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#008080",
    alignSelf: "center",
    marginBottom: 20,
  },
});
