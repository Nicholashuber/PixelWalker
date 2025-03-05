import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  const [selectedTab, setSelectedTab] = useState('Pet');

  const renderPetTab = () => {
    return (
      <View style={styles.contentContainer}>
        <Image
          source={require('@/assets/images/pet.gif')}
          style={styles.petImage}
          resizeMode="contain"
        />
        <Text style={styles.stepsCounter}>Steps: 1234</Text>
      </View>
    );
  };

  const renderBattleTab = () => {
    const dungeons = [
      { id: 1, name: 'Dungeon of Flames' },
      { id: 2, name: 'Cavern of Echoes' },
      { id: 3, name: 'Forest of Whispers' },
      { id: 4, name: 'Abyss of Shadows' },
      { id: 5, name: 'Temple of Time' },
    ];

    return (
      <ScrollView contentContainerStyle={styles.battleContainer}>
        {dungeons.map(dungeon => (
          <View key={dungeon.id} style={styles.dungeonCard}>
            <Text style={styles.dungeonTitle}>{dungeon.name}</Text>
            <Text style={styles.dungeonSteps}>Steps in dungeon: 0</Text>
            <TouchableOpacity style={styles.dungeonButton}>
              <Text style={styles.buttonText}>Enter Dungeon</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContent}>
        {selectedTab === 'Pet' ? renderPetTab() : renderBattleTab()}
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Pet' && styles.activeTab]}
          onPress={() => setSelectedTab('Pet')}
        >
          <Text style={[styles.tabButtonText, selectedTab === 'Pet' && styles.activeTabText]}>Pet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Battle' && styles.activeTab]}
          onPress={() => setSelectedTab('Battle')}
        >
          <Text style={[styles.tabButtonText, selectedTab === 'Battle' && styles.activeTabText]}>Battle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  tabContent: {
    flex: 1,
    padding: 20,
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  tabButton: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#D1FAE5',
  },
  tabButtonText: {
    fontSize: 16,
    color: '#4B5563',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#065F46',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  petImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  stepsCounter: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
  },
  battleContainer: {
    paddingVertical: 10,
  },
  dungeonCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  dungeonTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    color: '#1F2937',
  },
  dungeonSteps: {
    fontSize: 16,
    marginBottom: 12,
    color: '#4B5563',
  },
  dungeonButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
