import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ButtonProps,
  TouchableOpacityProps,
} from 'react-native';

type SkillCardProps = TouchableOpacityProps & ButtonProps;

const SkillCard = ({ ...rest }: SkillCardProps) => {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkill}>{rest.title}</Text>
    </TouchableOpacity>
  );
};

export { SkillCard };

const styles = StyleSheet.create({
  buttonSkill: {
    padding: 10,
    backgroundColor: '#1F1E25',
    borderRadius: 50,
    marginTop: 20,
    alignItems: 'center',
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
