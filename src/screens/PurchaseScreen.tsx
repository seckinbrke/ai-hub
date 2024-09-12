import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PlanOption from '../components/PlanOption';
import { theme } from '../constants/theme';

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
    setExpandedPlan(prevPlan => (prevPlan === plan ? '' : plan));
  };

  return (
    <View style={styles.container}>
      {/* Monthly Plan */}
      <PlanOption
        title="Monthly Plan"
        price="$10.99"
        plan={'Month'}
        details={monthlyDetails}
        isVisible={expandedPlan === 'monthly'}
        onToggleCollapse={() => toggleExpandPlan('monthly')}
        isAutoPay={isMonthlyAutoPay}
        setIsAutoPay={setIsMonthlyAutoPay}
      />

      {/* Annual Plan */}
      <PlanOption
        title="Annual Plan"
        price="$30.59"
        plan={'Annual'}
        details={annualDetails}
        isVisible={expandedPlan === 'annual'}
        onToggleCollapse={() => toggleExpandPlan('annual')}
        isAutoPay={isAnnualAutoPay}
        setIsAutoPay={setIsAnnualAutoPay}
      />

      {/* Start Free Trial Button */}
      <TouchableOpacity>
        <LinearGradient
          colors={theme.colors.gradients.generalGradient}
          style={styles.startTrialButton}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          >
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
    padding: 32,
  },
  startTrialButton: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  startTrialText: {
    fontSize: 15,
    color: 'black',
    fontFamily: theme.font.semiBold,
  },
  disclaimerText: {
    fontSize: 11,
    color: '#aaa',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default PurchaseScreen;
