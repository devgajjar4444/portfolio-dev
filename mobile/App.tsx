import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  FlatList,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { personal, skills, experience, projects } from "./src/data/portfolio";
import { colors, spacing } from "./src/theme";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const CARD_WIDTH = SCREEN_WIDTH * 0.85;

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {subtitle && <Text style={styles.sectionSubtitle}>{subtitle}</Text>}
    </View>
  );
}

function ProjectCard({ item }: { item: (typeof projects)[0] }) {
  return (
    <View style={[styles.projectCard, item.current && styles.projectCardActive]}>
      <View style={styles.projectHeader}>
        <Text style={styles.projectName}>{item.name}</Text>
        {item.current && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Active</Text>
          </View>
        )}
      </View>
      <Text style={styles.projectTagline}>{item.tagline}</Text>
      <Text style={styles.projectDesc} numberOfLines={4}>
        {item.description}
      </Text>
      <View style={styles.techRow}>
        {item.techStack.slice(0, 4).map((t) => (
          <View key={t} style={styles.techChip}>
            <Text style={styles.techText}>{t}</Text>
          </View>
        ))}
        {item.techStack.length > 4 && (
          <View style={styles.techChip}>
            <Text style={styles.techText}>+{item.techStack.length - 4}</Text>
          </View>
        )}
      </View>
      {item.url && (
        <TouchableOpacity
          style={styles.visitBtn}
          onPress={() => Linking.openURL(item.url!)}
        >
          <Ionicons name="open-outline" size={14} color="#fff" />
          <Text style={styles.visitBtnText}>Visit Project</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default function App() {
  const openLink = (url: string) => Linking.openURL(url);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* Hero */}
        <LinearGradient colors={["#09090b", "#0f172a", "#09090b"]} style={styles.hero}>
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={14} color={colors.accent} />
            <Text style={styles.locationText}>{personal.location}</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.expText}>{personal.yearsOfExperience} Years</Text>
          </View>
          <Text style={styles.role}>{personal.title}</Text>
          <Text style={styles.name}>Hi, I'm {personal.name.split(" ")[0]}</Text>
          <Text style={styles.headline}>{personal.headline}</Text>
          <Text style={styles.bio}>{personal.bio}</Text>
          <View style={styles.heroBtns}>
            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={() => openLink(`mailto:${personal.email}`)}
            >
              <Text style={styles.primaryBtnText}>Get in Touch</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Skills */}
        <View style={styles.section}>
          <SectionTitle
            title="Skills & Technologies"
            subtitle="Built over 5+ years across web, mobile & backend"
          />
          {skills.map((cat) => (
            <View key={cat.category} style={styles.skillCard}>
              <Text style={styles.skillCategory}>{cat.category}</Text>
              <View style={styles.skillRow}>
                {cat.skills.map((s) => (
                  <View key={s} style={styles.skillChip}>
                    <Text style={styles.skillText}>{s}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <SectionTitle title="Experience" subtitle="International clients & cross-functional teams" />
          {experience.map((exp) => (
            <View key={exp.company} style={[styles.expCard, exp.current && styles.expCardActive]}>
              <View style={styles.expTop}>
                <View style={{ flex: 1 }}>
                  <View style={styles.expNameRow}>
                    <Text style={styles.expCompany}>{exp.company}</Text>
                    {exp.current && (
                      <View style={styles.badge}>
                        <Text style={styles.badgeText}>Current</Text>
                      </View>
                    )}
                  </View>
                  <Text style={styles.expRole}>{exp.role}</Text>
                  <Text style={styles.expLocation}>{exp.location}</Text>
                </View>
                <Text style={styles.expPeriod}>{exp.period}</Text>
              </View>
              <Text style={styles.expDesc}>{exp.description}</Text>
              {exp.highlights.map((h) => (
                <Text key={h} style={styles.expHighlight}>
                  • {h}
                </Text>
              ))}
            </View>
          ))}
        </View>

        {/* Projects Carousel */}
        <View style={styles.section}>
          <SectionTitle
            title="Featured Projects"
            subtitle={`${projects.length} projects across multiple industries`}
          />
          <FlatList
            data={projects}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH + spacing.md}
            decelerationRate="fast"
            contentContainerStyle={{ paddingRight: spacing.lg }}
            renderItem={({ item }) => (
              <View style={{ width: CARD_WIDTH, marginRight: spacing.md }}>
                <ProjectCard item={item} />
              </View>
            )}
          />
        </View>

        {/* Contact */}
        <View style={[styles.section, { paddingBottom: 48 }]}>
          <SectionTitle title="Let's Work Together" subtitle="Open to new projects & opportunities" />
          <TouchableOpacity
            style={styles.contactCard}
            onPress={() => openLink(`mailto:${personal.email}`)}
          >
            <Ionicons name="mail-outline" size={24} color={colors.accent} />
            <View>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.contactValue}>{personal.email}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactCard}
            onPress={() => openLink(`tel:${personal.phone}`)}
          >
            <Ionicons name="call-outline" size={24} color={colors.accent} />
            <View>
              <Text style={styles.contactLabel}>Phone</Text>
              <Text style={styles.contactValue}>{personal.phone}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactCard}
            onPress={() => openLink(personal.linkedin)}
          >
            <Ionicons name="logo-linkedin" size={24} color={colors.accent} />
            <View>
              <Text style={styles.contactLabel}>LinkedIn</Text>
              <Text style={styles.contactValue}>Connect with me</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.footer}>
            © {new Date().getFullYear()} {personal.name}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scroll: { flexGrow: 1 },
  hero: { padding: spacing.lg, paddingTop: 60, paddingBottom: spacing.xl },
  locationRow: { flexDirection: "row", alignItems: "center", gap: 6, marginBottom: spacing.md },
  locationText: { color: colors.muted, fontSize: 13 },
  dot: { color: colors.border },
  expText: { color: colors.accent, fontSize: 13, fontWeight: "600" },
  role: { color: colors.accent, fontSize: 14, fontWeight: "600", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 },
  name: { color: colors.foreground, fontSize: 32, fontWeight: "800", marginBottom: 8 },
  headline: { color: colors.foreground, fontSize: 22, fontWeight: "700", marginBottom: spacing.md, lineHeight: 30 },
  bio: { color: colors.muted, fontSize: 15, lineHeight: 24, marginBottom: spacing.lg },
  heroBtns: { flexDirection: "row", gap: 12 },
  primaryBtn: { backgroundColor: colors.accent, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 12 },
  primaryBtnText: { color: "#fff", fontWeight: "700", fontSize: 15 },
  section: { padding: spacing.lg, borderTopWidth: 1, borderTopColor: colors.border },
  sectionHeader: { marginBottom: spacing.lg },
  sectionTitle: { color: colors.foreground, fontSize: 26, fontWeight: "800", marginBottom: 6 },
  sectionSubtitle: { color: colors.muted, fontSize: 14, lineHeight: 20 },
  skillCard: { backgroundColor: colors.card, borderRadius: 16, padding: spacing.md, marginBottom: 12, borderWidth: 1, borderColor: colors.border },
  skillCategory: { color: colors.foreground, fontWeight: "700", fontSize: 15, marginBottom: 10 },
  skillRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  skillChip: { backgroundColor: colors.accentDim, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20 },
  skillText: { color: colors.accent, fontSize: 12, fontWeight: "500" },
  expCard: { backgroundColor: colors.card, borderRadius: 16, padding: spacing.md, marginBottom: 12, borderWidth: 1, borderColor: colors.border },
  expCardActive: { borderColor: "rgba(59,130,246,0.5)" },
  expTop: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
  expNameRow: { flexDirection: "row", alignItems: "center", gap: 8, flexWrap: "wrap" },
  expCompany: { color: colors.foreground, fontSize: 17, fontWeight: "700" },
  expRole: { color: colors.accent, fontSize: 13, fontWeight: "600", marginTop: 2 },
  expLocation: { color: colors.muted, fontSize: 12, marginTop: 2 },
  expPeriod: { color: colors.muted, fontSize: 11, backgroundColor: "#27272a", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, overflow: "hidden" },
  expDesc: { color: colors.muted, fontSize: 13, lineHeight: 20, marginBottom: 8 },
  expHighlight: { color: colors.muted, fontSize: 12, lineHeight: 18, marginBottom: 2 },
  badge: { backgroundColor: colors.accentDim, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 12 },
  badgeText: { color: colors.accent, fontSize: 10, fontWeight: "700" },
  projectCard: { backgroundColor: colors.card, borderRadius: 16, padding: spacing.md, borderWidth: 1, borderColor: colors.border, minHeight: 280 },
  projectCardActive: { borderColor: "rgba(59,130,246,0.5)" },
  projectHeader: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 6 },
  projectName: { color: colors.foreground, fontSize: 18, fontWeight: "700", flex: 1 },
  projectTagline: { color: colors.accent, fontSize: 12, fontWeight: "600", marginBottom: 8, opacity: 0.9 },
  projectDesc: { color: colors.muted, fontSize: 13, lineHeight: 20, marginBottom: 12 },
  techRow: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginBottom: 12 },
  techChip: { backgroundColor: colors.accentDim, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12 },
  techText: { color: colors.accent, fontSize: 11, fontWeight: "600" },
  visitBtn: { flexDirection: "row", alignItems: "center", gap: 6, backgroundColor: colors.accent, paddingHorizontal: 14, paddingVertical: 10, borderRadius: 10, alignSelf: "flex-start" },
  visitBtnText: { color: "#fff", fontSize: 13, fontWeight: "600" },
  contactCard: { flexDirection: "row", alignItems: "center", gap: 16, backgroundColor: colors.card, borderRadius: 16, padding: spacing.md, marginBottom: 12, borderWidth: 1, borderColor: colors.border },
  contactLabel: { color: colors.muted, fontSize: 12 },
  contactValue: { color: colors.foreground, fontSize: 15, fontWeight: "600" },
  footer: { color: colors.muted, fontSize: 12, textAlign: "center", marginTop: spacing.lg },
});
