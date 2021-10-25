import { Box, Stack, useColorMode } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import Text from './Text';

const TagCapsule = ({
  tags, separator, background, variant,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Stack
      bg={variant === 'rounded' ? 'none' : background}
      as="ul"
      direction="row"
      height="30px"
      my="18px"
      width="fit-content"
      px="20px"
      borderRadius="15px"
    >
      {tags.map((tag, i) => (
        <Box
          as="li"
          display="flex"
          bg={variant === 'rounded' ? background : 'none'}
          direction="row"
          padding={variant === 'rounded' ? '0 10px' : '0'}
          style={{ margin: variant === 'rounded' ? '0 4.5px' : '0' }}
          rounded={variant === 'rounded' ? '15px' : 'none'}
          key={tag.name}
          lineHeight="22px"
          color={colorMode === 'light' ? 'black' : 'black'}
        >
          <Text
            margin="0"
            alignSelf="center"
            letterSpacing="0.05em"
            textAlign="center"
            size="11px"
            color="black"
            textTransform="uppercase"
          >
            {tag.name}
          </Text>
          {variant === 'slash' && i < tags.length - 1 && (
            <Box as="span" alignSelf="center" userSelect="none" fontSize="15px" mx="0.5rem">
              {separator}
            </Box>
          )}
        </Box>
      ))}
    </Stack>
  );
};

TagCapsule.propTypes = {
  tags: PropTypes.string.isRequired,
  separator: PropTypes.string,
  background: PropTypes.string,
  variant: PropTypes.string,
};
TagCapsule.defaultProps = {
  separator: '/',
  background: 'yellow.light',
  variant: 'slash',
};

export default TagCapsule;
