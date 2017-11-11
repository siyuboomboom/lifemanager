        <AnimatedCircularProgress
          ref='circularProgress'
          size={120}
          width={15}
          fill={this.state.fill}
          tintColor="#00e0ff"
          backgroundColor="#3d5875">
          {
            (fill) => (
              <Text style={styles.points}>
                { this.state.fill }
              </Text>
            )
          }
        </AnimatedCircularProgress>