// PaymentScreen.js
import React from 'react';
import { View, Button } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';

const PaymentScreen = () => {
  const { confirmPayment } = useStripe();

  const handlePayment = async () => {
    const { paymentIntent, error } = await confirmPayment('YOUR_PAYMENT_INTENT_CLIENT_SECRET', {
      type: 'Card',
      billingDetails: { email: 'test@example.com' },
    });

    if (error) {
      console.error('Payment confirmation error', error);
    } else if (paymentIntent) {
      console.log('Payment successful', paymentIntent);
    }
  };

  return (
    <View>
      <CardField
        postalCodeEnabled={true}
        placeholder={{ number: '4242 4242 4242 4242' }}
        cardStyle={{ backgroundColor: '#FFFFFF', textColor: '#000000' }}
        style={{ width: '100%', height: 50, marginVertical: 30 }}
      />
      <Button title="Pay" onPress={handlePayment} />
    </View>
  );
};

export default PaymentScreen;
