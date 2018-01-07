const reactRedux = require('react-redux');

const { connect: _connect } = reactRedux;

const defaultMergeProps = (stateProps, dispatchProps, ownProps) =>
  Object.assign({}, ownProps, stateProps, dispatchProps)

export function mapStateToProps(mapStateToProps, options) {
  return _connect(mapStateToProps, {}, defaultMergeProps, options);
}

export function mapDispatchToProps(mapDispatchToProps, options) {

  const mapStateToProps = () => ({});

  return _connect(mapStateToProps, mapDispatchToProps, defaultMergeProps, options);
}

export function connect() {
  return _connect(...arguments)
}