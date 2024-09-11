import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PlanOption from '../components/PlanOption';

const PurchaseScreen = () => {
  // Track which plan is expanded (default to 'monthly' expanded)
  const [expandedPlan, setExpandedPlan] = useState('monthly'); // 'monthly' is expanded by default

  const [isMonthlyAutoPay, setIsMonthlyAutoPay] = useState(false);
  const [isAnnualAutoPay, setIsAnnualAutoPay] = useState(false);

  const monthlyDetails = [
    'Fast response speed',
    'Always accessible',
    'Priority access to new features',
    'Priority Customer support',
  ];

  const annualDetails = [...monthlyDetails];

  const toggleExpandPlan = (plan: any) => {
    // If the clicked plan is not already expanded, expand it and collapse the other one
    if (expandedPlan !== plan) {
      setExpandedPlan(plan);
    }
  };

  return (
    <View style={styles.container}>
      {/* Monthly Plan */}
      <PlanOption
        title="Monthly Plan"
        price="$10.99 / Month"
        details={monthlyDetails}
        isCollapsible={expandedPlan !== 'monthly'} // Collapsed when it's not the expanded plan
        onToggleCollapse={() => toggleExpandPlan('monthly')}
        isAutoPay={isMonthlyAutoPay}
        setIsAutoPay={setIsMonthlyAutoPay}
      />

      {/* Annual Plan */}
      <PlanOption
        title="Annual Plan"
        price="$30.59 / Annual"
        details={annualDetails}
        isCollapsible={expandedPlan !== 'annual'} // Collapsed when it's not the expanded plan
        onToggleCollapse={() => toggleExpandPlan('annual')}
        isAutoPay={isAnnualAutoPay}
        setIsAutoPay={setIsAnnualAutoPay}
      />

      {/* Start Free Trial Button */}
      <TouchableOpacity>
        <LinearGradient
          colors={['#32CD32', '#00FF7F']}
          style={styles.startTrialButton}>
          <Text style={styles.startTrialText}>
            Start your 7 days free trial
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.disclaimerText}>
        By placing this order, you agree to the Terms of Service and Privacy
        Policy. Subscription automatically renews unless auto-renew is turned
        off at least 24-hours before the end of the current period.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  startTrialButton: {
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  startTrialText: {
    fontSize: 18,
    color: '#fff',
  },
  disclaimerText: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default PurchaseScreen;
