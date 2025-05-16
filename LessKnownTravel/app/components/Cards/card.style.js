import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: '#fff',
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    marginTop: 0,
  },
  image: {
    width: '100%',
    height: 180,
  },
  info: {
    padding: 12,
  },
  country: {
    fontWeight: '700',
    fontSize: 16,
  },
  city: {
    fontSize: 14,
    color: '#555',
  },
  description: {
    marginTop: 6,
    fontSize: 13,
    color: '#888',
  }
});

export default styles;