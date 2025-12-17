class docker_agent {
  package { 'puppet-agent':
    ensure => installed,
  }

  service { 'puppet':
    ensure => running,
    enable => true,
  }
}
