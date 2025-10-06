import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

export type GameScreenProps = NativeStackScreenProps<RootStackParamList, 'Game'>;

// Simple reaction time mini-game for quick study breaks.
export default function GameScreen({ navigation }: GameScreenProps) {
  const [roundStarted, setRoundStarted] = useState(false);
  const [promptVisible, setPromptVisible] = useState(false);
  const [startTimeMs, setStartTimeMs] = useState<number | null>(null);
  const [resultMs, setResultMs] = useState<number | null>(null);

  const waitMs = useMemo(() => 800 + Math.floor(Math.random() * 1800), [roundStarted]);

  function startRound() {
    setResultMs(null);
    setRoundStarted(true);
    setPromptVisible(false);
    setStartTimeMs(null);
    setTimeout(() => {
      setPromptVisible(true);
      setStartTimeMs(Date.now());
    }, waitMs);
  }

  function reactNow() {
    if (!promptVisible || startTimeMs == null) return;
    const reaction = Date.now() - startTimeMs;
    setResultMs(reaction);
    setRoundStarted(false);
    setPromptVisible(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚡ Reaction Challenge</Text>
      <Text style={styles.subtitle}>Tap as soon as you see GO!</Text>

      {resultMs != null && (
        <Text style={styles.result}>Your time: {resultMs} ms</Text>
      )}

      {!roundStarted && (
        <Pressable style={styles.buttonPrimary} onPress={startRound}>
          <Text style={styles.buttonText}>Start Round</Text>
        </Pressable>
      )}

      {roundStarted && !promptVisible && (
        <View style={styles.waitBox}>
          <Text style={styles.waitText}>Wait for it…</Text>
        </View>
      )}

      {roundStarted && promptVisible && (
        <Pressable style={styles.goBox} onPress={reactNow}>
          <Text style={styles.goText}>GO!</Text>
        </Pressable>
      )}

      <Pressable style={styles.buttonSecondary} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonSecondaryText}>Back to Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 12,
  },
  title: {
    color: '#F9FAFB',
    fontSize: 24,
    fontWeight: '800',
  },
  subtitle: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  result: {
    marginTop: 8,
    color: '#FDE68A',
    fontSize: 16,
    fontWeight: '700',
  },
  buttonPrimary: {
    marginTop: 16,
    backgroundColor: '#10B981',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: '#0B1220',
    fontWeight: '800',
    fontSize: 16,
  },
  buttonSecondary: {
    marginTop: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#374151',
  },
  buttonSecondaryText: {
    color: '#9CA3AF',
    fontWeight: '700',
    fontSize: 14,
  },
  waitBox: {
    marginTop: 12,
    paddingHorizontal: 32,
    paddingVertical: 28,
    borderRadius: 12,
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  waitText: {
    color: '#9CA3AF',
    fontWeight: '700',
    fontSize: 20,
  },
  goBox: {
    marginTop: 12,
    paddingHorizontal: 36,
    paddingVertical: 36,
    borderRadius: 12,
    backgroundColor: '#F59E0B',
  },
  goText: {
    color: '#0B1220',
    fontWeight: '900',
    fontSize: 28,
  },
});
