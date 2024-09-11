import React from 'react';
import {View, Text, TouchableOpacity, Switch, StyleSheet} from 'react-native';
import Collapsible from 'react-native-collapsible';

const PlanOption = ({
  title,
  price,
  details,
  isCollapsible, // Controls the collapsed state
  onToggleCollapse,
  isAutoPay,
  setIsAutoPay,
}: any) => (
  <View style={styles.planContainer}>
    <TouchableOpacity onPress={onToggleCollapse}>
      <View style={styles.planHeader}>
        <Text style={styles.planTitle}>{title}</Text>
        <Text style={styles.planPrice}>{price}</Text>
        <Switch value={isAutoPay} onValueChange={setIsAutoPay} />
      </View>
    </TouchableOpacity>

    {/* Control the collapsible content based on the state */}
    <Collapsible collapsed={isCollapsible}>
      <View style={styles.planDetails}>
        {details.map((detail: any, index: any) => (
          <Text key={index} style={styles.planDetailText}>
            {`✓ ${detail}`}
          </Text>
        ))}
      </View>
    </Collapsible>
  </View>
);

export default PlanOption;

const styles = StyleSheet.create({
  planContainer: {
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
    padding: 15,
    backgroundColor: '#1a1a1a',
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  planTitle: {
    fontSize: 20,
    color: '#fff',
  },
  planPrice: {
    fontSize: 18,
    color: '#fff',
  },
  planDetails: {
    marginTop: 10,
  },
  planDetailText: {
    fontSize: 16,
    color: '#aaa',
    marginVertical: 2,
  },
});
