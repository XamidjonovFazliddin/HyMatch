import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  onApply: (filters: {
    minSalary?: number;
    maxDistance?: number;
    jlptLevel?: number;
  }) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ visible, onClose, onApply }) => {
  const [minSalary, setMinSalary] = useState<number>(0);
  const [maxDistance, setMaxDistance] = useState<number>(50);
  const [jlptLevel, setJlptLevel] = useState<number>(5);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Filtrlar</Text>

          <View style={styles.filterSection}>
            <Text>Minimal maosh: {minSalary} ¥</Text>
            <Slider
              minimumValue={0}
              maximumValue={3000}
              step={100}
              value={minSalary}
              onValueChange={setMinSalary}
            />
          </View>

          <View style={styles.filterSection}>
            <Text>Maksimal masofa: {maxDistance} km</Text>
            <Slider
              minimumValue={1}
              maximumValue={100}
              step={1}
              value={maxDistance}
              onValueChange={setMaxDistance}
            />
          </View>

          <View style={styles.filterSection}>
            <Text>Yapon tili darajasi: N{jlptLevel}</Text>
            <Slider
              minimumValue={1}
              maximumValue={5}
              step={1}
              value={jlptLevel}
              onValueChange={setJlptLevel}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.closeButton]}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Bekor qilish</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.applyButton]}
              onPress={() => onApply({ minSalary, maxDistance, jlptLevel })}
            >
              <Text style={styles.buttonText}>Qo'llash</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  filterSection: {
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: '#f44336',
  },
  applyButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FilterModal;